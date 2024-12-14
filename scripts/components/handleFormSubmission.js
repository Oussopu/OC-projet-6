import { validateForm } from "../utils/validateForm.js"

export const handleFormSubmission = () => {
    const form = document.querySelector(".modal-form")

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const firstNameInput = document.getElementById("first-name").value
        const lastNameInput = document.getElementById("last-name").value
        const emailInput = document.getElementById("email").value
        const messageInput = document.getElementById("message").value

        const  errors = validateForm({
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput
        })

        document.getElementById("first-name-error").style.display = errors.firstName ? "flex" : "none"
        document.getElementById("last-name-error").style.display = errors.lastName ? "flex" : "none"
        document.getElementById("email-error").style.display = errors.email ? "flex" : "none"

        if (!errors.firstName && !errors.lastName &&! errors.email) {
            console.log(firstNameInput, lastNameInput, emailInput, messageInput)
            document.getElementById("contact_modal").style.display = "none"
        }
    })
}