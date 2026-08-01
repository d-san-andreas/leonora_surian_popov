document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll('[id^="openModal"]');

  openButtons.forEach((openBtn) => {
    const index = openBtn.id.replace("openModal", "");
    const modalEl = document.getElementById(`modal${index}`);
    const closeBtn = document.getElementById(`closeModal${index}`);

    if (!modalEl || !closeBtn) return;

    const closeModal = () => {
      modalEl.classList.add("hidden");
      openBtn.focus();
    };

    openBtn.addEventListener("click", () => {
      modalEl.classList.remove("hidden");
      closeBtn.focus();
    });

    closeBtn.addEventListener("click", closeModal);

    modalEl.addEventListener("click", (event) => {
      if (event.target === modalEl) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modalEl.classList.contains("hidden")) {
        closeModal();
      }
    });
  });
});
