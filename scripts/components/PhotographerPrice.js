import { fetchData } from "../api/fetchData.js";
import { findPhotographerById } from "../api/photographerId.js";
import { getIdByQueryString } from "../utils/getIdByQueryString.js";

export const pricePhotographerDOM = (photographer) => {
  const findPhotographerByIdFromMedia = async () => {
    const data = await fetchData();
    const photographerId = getIdByQueryString();
    const photographerMedia = data.media.filter(
      media => media.photographerId === photographerId
    );

    const pricePhotographer = document.querySelector(".price-photographer");
    const totalLikes = photographerMedia.reduce((sum, media) => sum + media.likes, 0);

    pricePhotographer.innerHTML = "";

    const infoPhotographerPrice = document.createElement("p");
    const infoPhotographerLikes = document.createElement("p");

    infoPhotographerLikes.innerHTML = `${totalLikes} <img src="assets/icons/heartBlack.svg" />`;
    infoPhotographerPrice.textContent = `${photographer.price}€/jour`;

    pricePhotographer.appendChild(infoPhotographerLikes);
    pricePhotographer.appendChild(infoPhotographerPrice);

      updateTotalLikes(photographerMedia);

    return pricePhotographer;
  };

  return findPhotographerByIdFromMedia();
};

export const updateTotalLikes = (mediaArray) => {

  const totalLikes = mediaArray.reduce((sum, media) => sum + (media._likes || media.likes || 0), 0);
  const infoPhotographerLikes = document.querySelector(".price-photographer p:first-child");

    infoPhotographerLikes.innerHTML = `${totalLikes} <img src="assets/icons/heartBlack.svg" />`;
};

export const displayPhotographerPrice = async () => {
  const photographer = await findPhotographerById();
  pricePhotographerDOM(photographer);
};
