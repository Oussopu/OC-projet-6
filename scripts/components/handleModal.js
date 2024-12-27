export const handleModal = () => {
  const modal = document.getElementById("contact_modal")
  const openModal = document.getElementById("open-modal")
  const closeModal = document.querySelector(".close-modal")
  const firstFocusableElement = modal.querySelector("input, button, textarea, select")

  openModal.addEventListener("click", () => {
    modal.style.display = "block"
    modal.setAttribute("aria-hidden", "false")
    firstFocusableElement.focus()
  })
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    modal.setAttribute("aria-hidden", "true")
  })

   window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModal.click()
    }
  })
}
