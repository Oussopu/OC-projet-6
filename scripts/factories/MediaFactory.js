import { fetchPhotographers } from "../api/fetchPhotographers.js"
import { getIdByQueryString } from "../utils/getIdByQueryString.js"
import { Photo } from "../components/Photo.js"
import { Video } from "../components/Video.js"

class MediaFactory {
    static createMedia(data) {
      if (data.image) {
        return new Photo(data)
      } else if (data.video) {
        return new Video(data)
      } else {
        console.log("error")
      }
    }
  }
  
  export const findPhotographerByIdFromMedia = async () => {
    const data = await fetchPhotographers()
    const photographerId = getIdByQueryString()
    const photographerMedia = data.media.filter(
      (media) => media.photographerId === photographerId
    )
  
    const mediaSection = document.querySelector(".media-section")
  
    photographerMedia.forEach((mediaData) => {
      const media = MediaFactory.createMedia(mediaData)
      mediaSection.innerHTML += media.render()
    })
  }