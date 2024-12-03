import { displayPhotographerInfo } from "../components/PhotographerInfo.js"
import { displayPhotographerPicture } from "../components/PhotographerPicture.js"
import { displayPhotographerPrice } from "../components/PhotographerPrice.js"
import { findPhotographerByIdFromMedia } from "../factories/MediaFactory.js"
import { manageModal } from "../utils/manageModal.js"
import { getFormInputs } from "../utils/getFormInputs.js"
import { manageLightbox } from "../utils/manageLightbox.js"

document.addEventListener("DOMContentLoaded", () => {
  manageModal();
  getFormInputs();
  manageLightbox();
})

findPhotographerByIdFromMedia();
displayPhotographerInfo();
displayPhotographerPicture();
displayPhotographerPrice();
