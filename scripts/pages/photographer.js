import { displayPhotographerInfo } from "../components/PhotographerInfo.js"
import { displayPhotographerPicture } from "../components/PhotographerPicture.js"
import { displayPhotographerPrice } from "../components/PhotographerPrice.js"
import { findPhotographerByIdFromMedia } from "../factories/MediaFactory.js";

findPhotographerByIdFromMedia();
displayPhotographerInfo();
displayPhotographerPicture();
displayPhotographerPrice();