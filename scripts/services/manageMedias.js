import { fetchPhotographers } from "../api/fetchPhotographers.js"
import { getIdByQueryString } from "../utils/getIdByQueryString.js"
import { MediaFactory } from "../factories/MediaFactory.js"
import { sortMedias } from "../utils/sortMedias.js"

// charge les photos et videos puis les filtre
export const manageMedias = async (sortBy = "popular") => {
    const data = await fetchPhotographers()
    const photographerId = getIdByQueryString()

    const photographerMedia = data.media.filter(
      (media) => media.photographerId === photographerId
    )

    let mediaList = photographerMedia.map((mediaData) =>
      MediaFactory.createMedia(mediaData)
    )

    mediaList = sortMedias(mediaList, sortBy)
    const mediaSection = document.querySelector(".media-section")
    mediaSection.innerHTML = ""
    mediaList.forEach((media) => {
      mediaSection.innerHTML += media.render()
    })

    return mediaList 
}