import { displayPhotographerInfo } from "../services/displayPhotographerInfo.js"
import { displayPhotographerPicture } from "../services/displayPhotographerPicture.js"
import { displayPhotographerPrice } from "../services/displayPhotographerPrice.js"
import { displayPhotographerLikes } from "../services/displayPhotographerLikes.js"
import { manageFilter } from "../components/manageFIlter.js"
import { manageMedias } from "../services/manageMedias.js"
import { handleModal } from "../components/handleModal.js"
import { handleFormSubmission } from "../components/handleFormSubmission.js"
import { manageLightbox } from "../components/manageLightbox.js"
import { likesRefresh } from "../services/manageLikes.js"

document.addEventListener("DOMContentLoaded", () => {
  handleModal()
  handleFormSubmission()
  manageMedias()
  manageLightbox()
  likesRefresh()

  displayPhotographerInfo()
  displayPhotographerPicture()
  displayPhotographerLikes()
  displayPhotographerPrice()
  manageFilter()
})


