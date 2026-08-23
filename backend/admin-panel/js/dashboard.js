(function () {
  const token = localStorage.getItem("stralynn_admin_token");
  if (!token) {
    window.location.href = "/admin/index.html";
    return;
  }

  const tableBody = document.getElementById("tableBody");
  const emptyState = document.getElementById("emptyState");
  const pageInfo = document.getElementById("pageInfo");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const searchInput = document.getElementById("searchInput");
  const statusFilter = document.getElementById("statusFilter");
  const exportBtn = document.getElementById("exportBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  let state = { page: 1, pages: 1, search: "", status: "" };
  let searchTimeout;

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

  async function loadData() {
    const params = new URLSearchParams({
      page: state.page,
      limit: 20,
      search: state.search,
      status: state.status,
    });
    const res = await fetch("/api/admin/submissions?" + params.toString(), {
      headers: authHeaders(),
    });
    if (await handleAuthFailure(res)) return;
    const data = await res.json();
    if (!res.ok) {
      alert(data.message || "Failed to load submissions.");
      return;
    }
    render(data);
  }

  function render(data) {
    state.page = data.page;
    state.pages = data.pages;
    tableBody.innerHTML = "";

    if (!data.items.length) {
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
    }

    data.items.forEach((item) => {
      const tr = document.createElement("tr");
      const date = item.createdAt ? new Date(item.createdAt).toLocaleString() : "";
      const phone = item.countryCode ? `${item.countryCode} ${item.phone || ""}` : (item.phone || "");
      tr.innerHTML = `
        <td>${escapeHtml(date)}</td>
        <td>${escapeHtml(item.firstName)} ${escapeHtml(item.lastName)}</td>
        <td>${escapeHtml(item.email)}</td>
        <td>${escapeHtml(phone)}</td>
        <td>${escapeHtml(item.company)}</td>
        <td>${escapeHtml(item.role)}</td>
        <td>${escapeHtml(item.reason)}</td>
        <td class="msg-cell">${escapeHtml(item.message)}</td>
        <td>
          <select class="status-select" data-id="${item._id}">
            <option value="new" ${item.status === "new" ? "selected" : ""}>New</option>
            <option value="in_progress" ${item.status === "in_progress" ? "selected" : ""}>In progress</option>
            <option value="resolved" ${item.status === "resolved" ? "selected" : ""}>Resolved</option>
          </select>
        </td>
        <td><button class="delete-btn" data-id="${item._id}">Delete</button></td>
      `;
      tableBody.appendChild(tr);
    });

    pageInfo.textContent = `Page ${state.page} of ${state.pages} (${data.total} total)`;
    prevBtn.disabled = state.page <= 1;
    nextBtn.disabled = state.page >= state.pages;
  }

  tableBody.addEventListener("change", async (e) => {
    if (e.target.classList.contains("status-select")) {
      const id = e.target.dataset.id;
      const status = e.target.value;
      const res = await fetch(`/api/admin/submissions/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({ status }),
      });
      if (await handleAuthFailure(res)) return;
      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Failed to update status.");
      }
    }
  });

  tableBody.addEventListener("click", async (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = e.target.dataset.id;
      if (!confirm("Delete this submission? This cannot be undone.")) return;
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      if (await handleAuthFailure(res)) return;
      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Failed to delete.");
        return;
      }
      loadData();
    }
  });

  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.search = searchInput.value.trim();
      state.page = 1;
      loadData();
    }, 350);
  });

  statusFilter.addEventListener("change", () => {
    state.status = statusFilter.value;
    state.page = 1;
    loadData();
  });

  prevBtn.addEventListener("click", () => {
    if (state.page > 1) { state.page -= 1; loadData(); }
  });
  nextBtn.addEventListener("click", () => {
    if (state.page < state.pages) { state.page += 1; loadData(); }
  });

  exportBtn.addEventListener("click", async () => {
    const res = await fetch("/api/admin/submissions/export/excel", {
      headers: authHeaders(),
    });
    if (await handleAuthFailure(res)) return;
    if (!res.ok) {
      alert("Failed to export.");
      return;
    }
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `stralynn-contact-submissions-${Date.now()}.xlsx`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("stralynn_admin_token");
    window.location.href = "/admin/index.html";
  });

  loadData();
})();
