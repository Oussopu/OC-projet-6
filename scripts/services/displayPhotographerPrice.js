import { fetchPhotographerById } from "../api/fetchPhotographerById.js"
import { PhotographerPrice } from "../components/PhotographerPrice.js"

// affiche le prix journalier d'un photographe
export const displayPhotographerPrice = async () => {
    const photographer = await fetchPhotographerById()

    const photographerPrice = new PhotographerPrice(photographer)

    const pricePhotographerContainer = document.querySelector(".price-photographer-container")

    pricePhotographerContainer.innerHTML = photographerPrice.render()
}