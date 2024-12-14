export const handleModal = () => {
  const modal = document.getElementById("contact_modal")
  const openModal = document.getElementById("open-modal")
  const closeModal = document.querySelector(".close-modal")

  openModal.addEventListener("click", () => {
    modal.style.display = "block"
  })
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })
}
