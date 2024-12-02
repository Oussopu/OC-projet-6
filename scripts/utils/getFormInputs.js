export const getFormInputs = () => {
    const form = document.querySelector(".modal-form")
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      
      const modal = document.getElementById("contact_modal");

      const firstName = document.getElementById("first-name")
      const firstNameInput = firstName.value
      const lastName = document.getElementById("last-name")
      const lastNameInput = lastName.value
      const email = document.getElementById("email")
      const emailInput = email.value
      const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
      const message = document.getElementById("message")
      const messageInput = message.value

      const firstError = document.getElementById("first-name-error")
      const lastError = document.getElementById("last-name-error")
      const emailError = document.getElementById("email-error")

      let isValidate = true

      if (firstNameInput === "" || firstNameInput.length<2) {
        firstError.style.display = "flex"
        isValidate = false
      } else {
        firstError.style.display = "none"
      } 

      if (lastNameInput === "" || lastNameInput.length<2) {
        lastError.style.display = "flex"
        isValidate = false
      } else {
        lastError.style.display = "none"
      } 

      if (!regexEmail.test(emailInput)) {
        emailError.style.display = "flex"
        isValidate = false
      } else {
        emailError.style.display = "none"
      } 
      
      if (isValidate === true) {
        console.log(firstNameInput)
        console.log(lastNameInput)
        console.log(emailInput)
        console.log(messageInput)
        modal.style.display = "none"
      }
    })
  }
  