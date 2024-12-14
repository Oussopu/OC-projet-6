export function validateForm({firstName, lastName, email}) {
    const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

    const errors = {
        firstName: firstName.length < 2,
        lastName: lastName.length < 2,
        email: !regexEmail.test(email)
    }
    
    return errors
}