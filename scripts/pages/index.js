import { PhotographerCard } from "../components/PhotographerCard.js"
import { handlePhotographerCardClick } from "../services/handlePhotographerCardClick.js"
import { fetchPhotographers } from "../api/fetchPhotographers.js"

document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchPhotographers()
    const photographers = data.photographers

    const photographersContainer = document.querySelector(".photographer_section")

    photographers.forEach(photographer => {
        const photographerCard = new PhotographerCard(photographer)
        photographersContainer.insertAdjacentHTML("beforeend", photographerCard.render())
    })

    handlePhotographerCardClick(".photographer-card")
})