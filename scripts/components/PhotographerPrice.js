import { findPhotographerById } from "../api/photographerId.js"

export const pricePhotographerDOM = (photographer) => {
    const pricePhotographer = document.querySelector(".price-photographer");
  
    pricePhotographer.innerHTML = "";
  
    const infoPhotographerPrice = document.createElement("p");
    infoPhotographerPrice.textContent = `${photographer.price}€/jour`;
  
    pricePhotographer.appendChild(infoPhotographerPrice);
    return pricePhotographer;
  };
  
  
  
  
export const displayPhotographerPrice = async () => {
    const photographer = await findPhotographerById();
    pricePhotographerDOM(photographer);
  };