import { fetchPhotographerById } from "../api/fetchPhotographerById.js"
import { PhotographerInfo } from "../components/PhotographerInfo.js"

export const displayPhotographerInfo = async () => {
    const photographer = await fetchPhotographerById()

    const photographerInfo = new PhotographerInfo(photographer)

    const infoPhotographerContainer = document.querySelector(".info-photographer")
    const photographerModalName = document.querySelector(".photographer-name")

    infoPhotographerContainer.innerHTML = photographerInfo.render()
    photographerModalName.innerHTML = photographerInfo.renderModalName()
}