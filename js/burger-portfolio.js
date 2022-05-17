(() => {
  const refs = {
    openModalBtn: document.querySelector("[burger-open]"),
    closeModalBtn: document.querySelector("[burger-close]"),
    modal: document.querySelector("[burger]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-burger");
  }
})();
