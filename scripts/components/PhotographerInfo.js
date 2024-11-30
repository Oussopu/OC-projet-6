import { findPhotographerById } from "../api/photographerId.js"

export const infoPhotographerDOM = (photographer) => {
    const infoPhotographer = document.querySelector(".info-photographer");
  
    infoPhotographer.innerHTML = "";
  
    const infoPhotographerName = document.createElement("h2");
    infoPhotographerName.textContent = photographer.name;
  
    const infoPhotographerLocation = document.createElement("h3");
    infoPhotographerLocation.textContent = `${photographer.city}, ${photographer.country}`;
  
    const infoPhotographerTagline = document.createElement("h4");
    infoPhotographerTagline.textContent = photographer.tagline;
  
    infoPhotographer.appendChild(infoPhotographerName);
    infoPhotographer.appendChild(infoPhotographerLocation);
    infoPhotographer.appendChild(infoPhotographerTagline);
  
    return infoPhotographer;
  };

  export const displayPhotographerInfo = async () => {
    const photographer = await findPhotographerById();
    infoPhotographerDOM(photographer);
  };