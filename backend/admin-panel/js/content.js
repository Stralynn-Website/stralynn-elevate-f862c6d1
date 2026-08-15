(function () {
  const token = localStorage.getItem("stralynn_admin_token");

  function authHeaders() {
    return { Authorization: "Bearer " + token };
  }

  async function handleAuthFailure(res) {
    if (res.status === 401) {
      localStorage.removeItem("stralynn_admin_token");
      window.location.href = "/admin/index.html";
      return true;
    }
    return false;
  }

  function escapeHtml(str) {
    return (str || "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  const pagePicker = document.getElementById("pagePicker");
  const editorWrap = document.getElementById("contentEditor");

  let pages = [];          // registry from /api/admin/content/pages
  let activePageKey = null;
  let items = [];          // working copy for the active page (edited client-side, saved on demand)

  async function loadPages() {
    const res = await fetch("/api/admin/content/pages", { headers: authHeaders() });
    if (await handleAuthFailure(res)) return;
    const data = await res.json();
    pages = data.pages || [];
    renderPagePicker();
    if (pages.length) selectPage(pages[0].pageKey);
  }

  function renderPagePicker() {
    pagePicker.innerHTML = "";
    pages.forEach((p) => {
      const btn = document.createElement("button");
      btn.textContent = p.label;
      btn.className = p.pageKey === activePageKey ? "active" : "";
      btn.addEventListener("click", () => selectPage(p.pageKey));
      pagePicker.appendChild(btn);
    });
  }

  async function selectPage(pageKey) {
    activePageKey = pageKey;
    renderPagePicker();
    editorWrap.innerHTML = "<p style='color:#6b7280;font-size:13px;'>Loading...</p>";

    const res = await fetch(`/api/admin/content/${pageKey}`, { headers: authHeaders() });
    if (await handleAuthFailure(res)) return;
    const data = await res.json();
    if (!res.ok) {
      editorWrap.innerHTML = `<p style="color:#b91c1c;">${escapeHtml(data.message || "Failed to load.")}</p>`;
      return;
    }
    items = data.items || [];
    renderEditor(data.sectionLabel || "Content");
  }

  function renderEditor(sectionLabel) {
    editorWrap.innerHTML = "";

    const heading = document.createElement("h3");
    heading.style.margin = "0 0 16px";
    heading.style.fontSize = "16px";
    heading.textContent = `${sectionLabel} — ${items.length} item${items.length === 1 ? "" : "s"}`;
    editorWrap.appendChild(heading);

    items.forEach((item, idx) => editorWrap.appendChild(buildItemCard(item, idx)));

    const addBtn = document.createElement("button");
    addBtn.className = "btn-add";
    addBtn.textContent = "+ Add new item";
    addBtn.addEventListener("click", () => {
      items.push({ icon: "", tag: "", title: "", description: "" });
      renderEditor(sectionLabel);
      editorWrap.scrollTop = editorWrap.scrollHeight;
    });
    editorWrap.appendChild(addBtn);

    const saveBar = document.createElement("div");
    saveBar.className = "save-bar";
    saveBar.innerHTML = `
      <button class="btn-save" id="saveContentBtn">Save changes</button>
      <span class="save-status" id="saveStatus"></span>
    `;
    editorWrap.appendChild(saveBar);

    document.getElementById("saveContentBtn").addEventListener("click", saveContent);
  }

  function buildItemCard(item, idx) {
    const card = document.createElement("div");
    card.className = "content-card";
    card.innerHTML = `
      <div class="row">
        <div>
          <label>Tag (optional label, e.g. "Case Study")</label>
          <input type="text" data-field="tag" data-idx="${idx}" value="${escapeHtml(item.tag)}" />
        </div>
        <div>
          <label>Icon (optional, lucide icon name e.g. "FileText")</label>
          <input type="text" data-field="icon" data-idx="${idx}" value="${escapeHtml(item.icon)}" />
        </div>
      </div>
      <div class="row">
        <div>
          <label>Title *</label>
          <input type="text" data-field="title" data-idx="${idx}" value="${escapeHtml(item.title)}" />
        </div>
      </div>
      <div class="row">
        <div>
          <label>Description *</label>
          <textarea data-field="description" data-idx="${idx}">${escapeHtml(item.description)}</textarea>
        </div>
      </div>
      <div class="card-footer">
        <span class="item-badge">Item ${idx + 1}</span>
        <button class="delete-btn" data-idx="${idx}">Delete item</button>
      </div>
    `;

    card.querySelectorAll("input, textarea").forEach((el) => {
      el.addEventListener("input", (e) => {
        const i = parseInt(e.target.dataset.idx, 10);
        const field = e.target.dataset.field;
        items[i][field] = e.target.value;
      });
    });

    card.querySelector(".delete-btn").addEventListener("click", () => {
      if (!confirm("Remove this item? This won't be saved until you click 'Save changes'.")) return;
      items.splice(idx, 1);
      renderEditor(document.querySelector("h3") ? document.querySelector("h3").textContent.split(" — ")[0] : "Content");
    });

    return card;
  }

  async function saveContent() {
    const statusEl = document.getElementById("saveStatus");
    statusEl.textContent = "Saving...";
    statusEl.className = "save-status";

    const invalid = items.some((it) => !it.title.trim() || !it.description.trim());
    if (invalid) {
      statusEl.textContent = "Every item needs a title and description.";
      statusEl.className = "save-status error";
      return;
    }

    try {
      const res = await fetch(`/api/admin/content/${activePageKey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({ items }),
      });
      if (await handleAuthFailure(res)) return;
      const data = await res.json();
      if (!res.ok) {
        statusEl.textContent = data.message || "Failed to save.";
        statusEl.className = "save-status error";
        return;
      }
      items = data.items || items;
      statusEl.textContent = "Saved. Changes are live on the site.";
      statusEl.className = "save-status success";
    } catch (err) {
      statusEl.textContent = "Network error. Please try again.";
      statusEl.className = "save-status error";
    }
  }

  window.StralynnContent = { init: loadPages };
})();
