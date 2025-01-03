import { fetchPhotographers } from "../api/fetchPhotographers.js"
import { getIdByQueryString } from "../utils/getIdByQueryString.js"
import { Photo } from "../components/Photo.js"

// gere les likes totaux de la page d'un photographe
const updateTotalLikes = (photos) => {
  const totalLikes = photos.reduce((sum, photo) => sum + photo._likes, 0)
  const globalLikesElement = document.querySelector(".likes-photographer-container")

  if (globalLikesElement) {
      globalLikesElement.innerHTML = `
      <p>${totalLikes} <img src="assets/icons/heartBlack.svg" 
      alt="Icône de cœur" aria-hidden="true"></p>`
  }
}

// gere les likes d'une photo
const updatePhotoLikesInDOM = (photo, isLiked) => {
  const likesCountElement = document.querySelector(`.likes-count[data-id="${photo._id}"]`)
  const likeButton = document.querySelector(`.media[data-id="${photo._id}"] .like-button`)

  likesCountElement.textContent = photo._likes

  if (isLiked) {
    likeButton.classList.add("liked")
    likeButton.querySelector(".heart-empty").style.display = "none"
    likeButton.querySelector(".heart").style.display = "block"
  } else {
    likeButton.classList.remove("liked")
    likeButton.querySelector(".heart-empty").style.display = "block"
    likeButton.querySelector(".heart").style.display = "none"
  }
}

// ajoute ou supprime un like et rafraichie le compteur de like global 
export const likesRefresh = async () => {
  const data = await fetchPhotographers()
  const mediaData = data.media
  const photographerId = getIdByQueryString()
  const filteredMedia = mediaData.filter(media => media.photographerId === photographerId)
  const photos = filteredMedia.map(data => new Photo(data))

  document.querySelectorAll(".like-button").forEach(button => {
    button.addEventListener("click", event => {
      const mediaElement = event.currentTarget.closest(".media")
      const photoId = mediaElement.getAttribute("data-id")
      const photo = photos.find(photo => photo._id === parseInt(photoId, 10))

      photo.toggleLike()

      updatePhotoLikesInDOM(photo, photo._liked)

      updateTotalLikes(photos)
    })
  })
  updateTotalLikes(photos)
}
