(function () {
  const token = localStorage.getItem("stralynn_admin_token");
  if (!token) {
    window.location.href = "/admin/index.html";
    return;
  }

  const navBtns = document.querySelectorAll(".nav-btn");
  const views = {
    submissions: document.getElementById("view-submissions"),
    content: document.getElementById("view-content"),
    careers: document.getElementById("view-careers"),
  };
  let contentLoaded = false;
  let careersLoaded = false;

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      navBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      Object.values(views).forEach((v) => v.classList.remove("active"));
      views[btn.dataset.view].classList.add("active");

      if (btn.dataset.view === "content" && !contentLoaded && window.StralynnContent) {
        contentLoaded = true;
        window.StralynnContent.init();
      }
      if (btn.dataset.view === "careers" && !careersLoaded && window.StralynnCareers) {
        careersLoaded = true;
        window.StralynnCareers.init();
      }
    });
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("stralynn_admin_token");
    window.location.href = "/admin/index.html";
  });
})();
