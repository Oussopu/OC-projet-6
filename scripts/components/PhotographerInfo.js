import { findPhotographerById } from "../api/photographerId.js"

export const infoPhotographerDOM = (photographer) => {
    const infoPhotographer = document.querySelector(".info-photographer");
    const photographerModalName = document.querySelector(".photographer-name");

  
    infoPhotographer.innerHTML = "";
  
    const infoPhotographerName = document.createElement("h2");
    infoPhotographerName.textContent = photographer.name;
    const modalPhotographerName = document.createElement("h2");
    modalPhotographerName.textContent = photographer.name;

  
    const infoPhotographerLocation = document.createElement("h3");
    infoPhotographerLocation.textContent = `${photographer.city}, ${photographer.country}`;
  
    const infoPhotographerTagline = document.createElement("h4");
    infoPhotographerTagline.textContent = photographer.tagline;
  
    infoPhotographer.appendChild(infoPhotographerName);
    infoPhotographer.appendChild(infoPhotographerLocation);
    infoPhotographer.appendChild(infoPhotographerTagline);
    photographerModalName.appendChild(modalPhotographerName);
  
    return infoPhotographer;
  };

  export const displayPhotographerInfo = async () => {
    const photographer = await findPhotographerById();
    infoPhotographerDOM(photographer);
  };