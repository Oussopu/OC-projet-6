import { fetchPhotographers } from "../api/fetchPhotographers.js"
import { getIdByQueryString } from "../utils/getIdByQueryString.js"
import { PhotographerLikes } from "../components/PhotographerLikes.js"

// affiche les likes d'un photographe
export const displayPhotographerLikes = async () => {
    const data = await fetchPhotographers()
    const photographerId = getIdByQueryString()
    const photographerMedia = data.media.filter(
        media => media.photographerId === photographerId
    )

    const photographerLikes = new PhotographerLikes(photographerMedia)

    const likesPhotographerContainer = document.querySelector(".likes-photographer-container")
    likesPhotographerContainer.innerHTML = photographerLikes.render()

}

// met a jour le nombre totaux de likes 
export const updateTotalLikes = (mediaArray) => {

    const totalLikes = mediaArray.reduce((sum, media) => sum + 
    (media._likes || media.likes || 0), 0)
    const infoPhotographerLikes = document.querySelector(".likes-photographer-container")
  
      infoPhotographerLikes.innerHTML = `<p> ${totalLikes} 
      <img src="assets/icons/heartBlack.svg" alt="Icône de cœur" aria-hidden="true" /></p>`
}
