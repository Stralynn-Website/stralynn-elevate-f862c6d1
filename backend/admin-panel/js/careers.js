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
    return { team: "", role: "", location: "", type: "Full-time", description: "", applyUrl: "", applicants: 0, isActive: true };
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
        <div class="grid2">
          <div>
            <label>Applicants so far</label>
            <input type="number" min="0" id="f_applicants" value="${formData.applicants || 0}" />
          </div>
          <div>
            <label>Apply link (optional)</label>
            <input type="text" id="f_applyUrl" value="${escapeHtml(formData.applyUrl)}" placeholder="https://..." />
          </div>
        </div>
        <div style="margin-bottom:12px;">
          <label>Description (optional, internal or for a future job detail page)</label>
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

    ["role", "team", "location", "type", "applicants", "applyUrl", "description"].forEach((field) => {
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
        <td><input type="number" min="0" class="applicants-input" data-id="${j._id}" value="${j.applicants || 0}" /></td>
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

  tableBody.addEventListener("change", async (e) => {
    if (e.target.classList.contains("applicants-input")) {
      const id = e.target.dataset.id;
      const job = jobs.find((j) => j._id === id);
      if (!job) return;
      const applicants = parseInt(e.target.value, 10) || 0;
      const res = await fetch(`/api/admin/jobs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({ ...job, applicants }),
      });
      if (await handleAuthFailure(res)) return;
      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Failed to update applicant count.");
        loadJobs();
      }
    }
  });

  tableBody.addEventListener("click", async (e) => {
    if (e.target.classList.contains("edit-job-btn")) {
      const id = e.target.dataset.id;
      const job = jobs.find((j) => j._id === id);
      if (!job) return;
      editingId = id;
      formData = {
        team: job.team, role: job.role, location: job.location, type: job.type,
        description: job.description || "", applyUrl: job.applyUrl || "",
        applicants: job.applicants || 0, isActive: job.isActive,
      };
      renderForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (e.target.classList.contains("delete-job-btn")) {
      const id = e.target.dataset.id;
      if (!confirm("Delete this role permanently? This cannot be undone.")) return;
      const res = await fetch(`/api/admin/jobs/${id}`, { method: "DELETE", headers: authHeaders() });
      if (await handleAuthFailure(res)) return;
      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Failed to delete role.");
        return;
      }
      loadJobs();
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

  window.StralynnCareers = { init: loadJobs };
})();
