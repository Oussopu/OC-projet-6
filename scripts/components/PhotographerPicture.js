import { findPhotographerById }  from "../api/photographerId.js"

export const picturePhotographerDOM = (photographer) => {
    const picturePhotographer = document.querySelector(".picture-photographer");
  
    picturePhotographer.innerHTML = "";
  
    const infoPhotographerPicture = document.createElement("img");
    infoPhotographerPicture.setAttribute(
      "src",
      `../assets/photographers/${photographer.portrait}`
    );
  
    picturePhotographer.appendChild(infoPhotographerPicture);
    return picturePhotographer;
  };

  export const displayPhotographerPicture = async () => {
    const photographer = await findPhotographerById();
    picturePhotographerDOM(photographer);
  };
  