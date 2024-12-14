import { displayPhotographerInfo } from "../services/displayPhotographerInfo.js"
import { displayPhotographerPicture } from "../services/displayPhotographerPicture.js"
import { displayPhotographerPrice } from "../services/displayPhotographerPrice.js"
import { displayPhotographerLikes } from "../services/displayPhotographerLikes.js"

import { findPhotographerByIdFromMedia } from "../factories/MediaFactory.js"

import { handleModal } from "../components/handleModal.js"
import { handleFormSubmission } from "../components/handleFormSubmission.js"

import { manageLightbox } from "../components/manageLightbox.js"
import { likesRefresh } from "../services/manageLikes.js"

document.addEventListener("DOMContentLoaded", () => {
  handleModal()
  handleFormSubmission()
  findPhotographerByIdFromMedia()
  manageLightbox()
  likesRefresh()

  displayPhotographerInfo()
  displayPhotographerPicture()
  displayPhotographerLikes()
  displayPhotographerPrice()
})


