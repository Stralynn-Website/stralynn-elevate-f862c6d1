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

  function formatDate(d) {
    if (!d) return "";
    return new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  const formWrap = document.getElementById("jobFormWrap");
  const tableBody = document.getElementById("jobsTableBody");
  const emptyState = document.getElementById("jobsEmptyState");

  let jobs = [];
  let editingId = null; // null = add mode, otherwise editing this job's _id

  function emptyForm() {
    return { team: "", role: "", location: "", type: "Full-time", description: "", applyUrl: "", isActive: true };
  }
  let formData = emptyForm();

  async function loadJobs() {
    const res = await fetch("/api/admin/jobs", { headers: authHeaders() });
    if (await handleAuthFailure(res)) return;
    const data = await res.json();
    if (!res.ok) {
      tableBody.innerHTML = "";
      emptyState.style.display = "block";
      emptyState.textContent = data.message || "Failed to load roles.";
      return;
    }
    jobs = data.jobs || [];
    renderTable();
    renderForm();
  }

  function renderForm() {
    formWrap.innerHTML = `
      <div class="job-form">
        <h3>${editingId ? "Edit role" : "Add a new role"}</h3>
        <div class="grid2">
          <div>
            <label>Role title *</label>
            <input type="text" id="f_role" value="${escapeHtml(formData.role)}" placeholder="e.g. Senior Product Designer" />
          </div>
          <div>
            <label>Category / team *</label>
            <input type="text" id="f_team" value="${escapeHtml(formData.team)}" placeholder="e.g. Design" />
          </div>
        </div>
        <div class="grid2">
          <div>
            <label>Location *</label>
            <input type="text" id="f_location" value="${escapeHtml(formData.location)}" placeholder="e.g. Remote · Americas" />
          </div>
          <div>
            <label>Employment type *</label>
            <input type="text" id="f_type" value="${escapeHtml(formData.type)}" placeholder="e.g. Full-time" />
          </div>
        </div>
        <div style="margin-bottom:12px;">
          <label>Apply link (optional — only used as a fallback if this role has no online applications yet)</label>
          <input type="text" id="f_applyUrl" value="${escapeHtml(formData.applyUrl)}" placeholder="https://..." />
        </div>
        <div style="margin-bottom:12px;">
          <label>Description (shown to candidates on the application page)</label>
          <textarea id="f_description">${escapeHtml(formData.description)}</textarea>
        </div>
        <div style="margin-bottom:12px; display:flex; align-items:center; gap:8px;">
          <input type="checkbox" id="f_isActive" ${formData.isActive ? "checked" : ""} style="width:auto;" />
          <label style="margin:0;" for="f_isActive">Visible on the live careers page</label>
        </div>
        <div class="form-actions">
          <button class="btn-save" id="saveJobBtn">${editingId ? "Save changes" : "Add role"}</button>
          ${editingId ? '<button class="btn-secondary" id="cancelEditBtn">Cancel</button>' : ""}
          <span class="save-status" id="jobFormStatus"></span>
        </div>
      </div>
    `;

    ["role", "team", "location", "type", "applyUrl", "description"].forEach((field) => {
      document.getElementById("f_" + field).addEventListener("input", (e) => {
        formData[field] = e.target.value;
      });
    });
    document.getElementById("f_isActive").addEventListener("change", (e) => {
      formData.isActive = e.target.checked;
    });
    document.getElementById("saveJobBtn").addEventListener("click", saveJob);
    const cancelBtn = document.getElementById("cancelEditBtn");
    if (cancelBtn) cancelBtn.addEventListener("click", () => { editingId = null; formData = emptyForm(); renderForm(); });
  }

  function renderTable() {
    tableBody.innerHTML = "";
    emptyState.style.display = jobs.length ? "none" : "block";

    jobs.forEach((j) => {
      const tr = document.createElement("tr");
      if (!j.isActive) tr.classList.add("inactive-row");
      tr.innerHTML = `
        <td>${escapeHtml(j.role)}</td>
        <td>${escapeHtml(j.team)}</td>
        <td>${escapeHtml(j.location)}</td>
        <td>${escapeHtml(j.type)}</td>
        <td>
          <button class="delete-btn view-applicants-btn" data-id="${j._id}" data-role="${escapeHtml(j.role)}" style="color:#1f6feb;">
            View (${j.applicantsCount || 0})
          </button>
        </td>
        <td>${formatDate(j.postedDate)}</td>
        <td><span class="status-pill ${j.isActive ? "active" : "inactive"}">${j.isActive ? "Live" : "Hidden"}</span></td>
        <td style="white-space:nowrap;">
          <button class="delete-btn edit-job-btn" data-id="${j._id}" style="color:#1f6feb;">Edit</button>
          <button class="delete-btn delete-job-btn" data-id="${j._id}">Delete</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  tableBody.addEventListener("click", async (e) => {
    if (e.target.classList.contains("edit-job-btn")) {
      const id = e.target.dataset.id;
      const job = jobs.find((j) => j._id === id);
      if (!job) return;
      editingId = id;
      formData = {
        team: job.team, role: job.role, location: job.location, type: job.type,
        description: job.description || "", applyUrl: job.applyUrl || "",
        isActive: job.isActive,
      };
      renderForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (e.target.classList.contains("delete-job-btn")) {
      const id = e.target.dataset.id;
      if (!confirm("Delete this role permanently? This cannot be undone. Past applications for it are kept for record-keeping.")) return;
      const res = await fetch(`/api/admin/jobs/${id}`, { method: "DELETE", headers: authHeaders() });
      if (await handleAuthFailure(res)) return;
      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Failed to delete role.");
        return;
      }
      loadJobs();
    }

    if (e.target.classList.contains("view-applicants-btn")) {
      openApplicantsModal(e.target.dataset.id, e.target.dataset.role);
    }
  });

  async function saveJob() {
    const statusEl = document.getElementById("jobFormStatus");
    statusEl.textContent = "Saving...";
    statusEl.className = "save-status";

    if (!formData.role.trim() || !formData.team.trim() || !formData.location.trim() || !formData.type.trim()) {
      statusEl.textContent = "Role, category, location, and type are required.";
      statusEl.className = "save-status error";
      return;
    }

    try {
      const url = editingId ? `/api/admin/jobs/${editingId}` : "/api/admin/jobs";
      const method = editingId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(formData),
      });
      if (await handleAuthFailure(res)) return;
      const data = await res.json();
      if (!res.ok) {
        statusEl.textContent = data.message || "Failed to save role.";
        statusEl.className = "save-status error";
        return;
      }
      statusEl.textContent = "Saved. Changes are live on the site.";
      statusEl.className = "save-status success";
      editingId = null;
      formData = emptyForm();
      loadJobs();
    } catch (err) {
      statusEl.textContent = "Network error. Please try again.";
      statusEl.className = "save-status error";
    }
  }

  // ---- Applicants modal ----

  let modalEl = null;

  function ensureModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.className = "modal-overlay";
    modalEl.innerHTML = `
      <div class="modal-box">
        <div class="modal-header">
          <h3 id="modalTitle">Applicants</h3>
          <button class="modal-close" id="modalCloseBtn">&times;</button>
        </div>
        <div class="modal-body" id="modalBody"></div>
      </div>
    `;
    document.body.appendChild(modalEl);
    modalEl.addEventListener("click", (e) => {
      if (e.target === modalEl) closeModal();
    });
    document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
    return modalEl;
  }

  function closeModal() {
    if (modalEl) modalEl.classList.remove("open");
  }

  async function openApplicantsModal(jobId, role) {
    const modal = ensureModal();
    document.getElementById("modalTitle").textContent = `Applicants — ${role}`;
    const body = document.getElementById("modalBody");
    body.innerHTML = "<p style='color:#6b7280;font-size:13px;'>Loading...</p>";
    modal.classList.add("open");

    const res = await fetch(`/api/admin/jobs/${jobId}/applications`, { headers: authHeaders() });
    if (await handleAuthFailure(res)) return;
    const data = await res.json();
    if (!res.ok) {
      body.innerHTML = `<p style="color:#b91c1c;">${escapeHtml(data.message || "Failed to load applicants.")}</p>`;
      return;
    }

    const applications = data.applications || [];
    if (!applications.length) {
      body.innerHTML = "<p style='color:#6b7280;font-size:13px;'>No applications yet for this role.</p>";
      return;
    }

    body.innerHTML = applications.map((a) => `
      <div class="applicant-card" data-id="${a._id}">
        <div class="applicant-card-top">
          <div>
            <div class="applicant-name">${escapeHtml(a.name)}</div>
            <div class="applicant-meta">${escapeHtml(a.email)}${a.phone ? " · " + escapeHtml(a.phone) : ""}${a.location ? " · " + escapeHtml(a.location) : ""}</div>
            <div class="applicant-meta">Applied ${formatDate(a.createdAt)}</div>
          </div>
          <select class="status-select applicant-status-select" data-id="${a._id}">
            <option value="new" ${a.status === "new" ? "selected" : ""}>New</option>
            <option value="reviewed" ${a.status === "reviewed" ? "selected" : ""}>Reviewed</option>
            <option value="shortlisted" ${a.status === "shortlisted" ? "selected" : ""}>Shortlisted</option>
            <option value="rejected" ${a.status === "rejected" ? "selected" : ""}>Rejected</option>
            <option value="hired" ${a.status === "hired" ? "selected" : ""}>Hired</option>
          </select>
        </div>
        ${a.linkedinUrl ? `<div class="applicant-meta">LinkedIn/Portfolio: <a href="${escapeHtml(a.linkedinUrl)}" target="_blank" rel="noopener">${escapeHtml(a.linkedinUrl)}</a></div>` : ""}
        ${a.coverNote ? `<p class="applicant-note">${escapeHtml(a.coverNote)}</p>` : ""}
        <button class="btn-secondary download-resume-btn" data-id="${a._id}" data-filename="${escapeHtml(a.resumeFilename || "resume")}">⬇ Download Resume</button>
      </div>
    `).join("");

    body.querySelectorAll(".applicant-status-select").forEach((sel) => {
      sel.addEventListener("change", async (e) => {
        const id = e.target.dataset.id;
        const status = e.target.value;
        const r = await fetch(`/api/admin/applications/${id}/status`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json", ...authHeaders() },
          body: JSON.stringify({ status }),
        });
        if (await handleAuthFailure(r)) return;
        if (!r.ok) {
          const d = await r.json();
          alert(d.message || "Failed to update status.");
        }
      });
    });

    body.querySelectorAll(".download-resume-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.target.dataset.id;
        const filename = e.target.dataset.filename;
        const r = await fetch(`/api/admin/applications/${id}/resume`, { headers: authHeaders() });
        if (await handleAuthFailure(r)) return;
        if (!r.ok) {
          alert("Failed to download resume.");
          return;
        }
        const blob = await r.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      });
    });
  }

  window.StralynnCareers = { init: loadJobs };
})();
