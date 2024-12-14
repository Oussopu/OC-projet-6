import { fetchPhotographerById } from "../api/fetchPhotographerById.js"
import { PhotographerPicture } from "../components/PhotographerPicture.js"

export const displayPhotographerPicture = async () => {
    const photographer = await fetchPhotographerById()

    const photographerPicture = new PhotographerPicture(photographer)

    const picturePhotographerContainer = document.querySelector(".picture-photographer")

    picturePhotographerContainer.innerHTML = photographerPicture.render()
}