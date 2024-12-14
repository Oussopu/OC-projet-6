import { fetchPhotographerById } from "../api/fetchPhotographerById.js"
import { PhotographerPrice } from "../components/PhotographerPrice.js"

export const displayPhotographerPrice = async () => {
    const photographer = await fetchPhotographerById()

    const photographerPrice = new PhotographerPrice(photographer)

    const pricePhotographerContainer = document.querySelector(".price-photographer-container")

    pricePhotographerContainer.innerHTML = photographerPrice.render()
}