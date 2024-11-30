export function photographerTemplate(data) {
    const { city, country, id, name, portrait, price, tagline } = data;
  
    const picture = `assets/photographers/${portrait}`;
  
    function getUserCardDOM() {
      const photographer = document.createElement("article");
      const picturePhotographerParent = document.createElement(
        "picture-photographer-parent"
      );
  
      const photographerPicture = document.createElement("img");
      photographerPicture.setAttribute("src", picture);
      photographerPicture.ariaLabel = `photo de ${name}`;
      const photographerName = document.createElement("h2");
      photographerName.textContent = name;
      photographerName.ariaLabel = `${name}`;
      const photographerLocation = document.createElement("h3");
      photographerLocation.textContent = `${city}, ${country}`;
      photographerLocation.ariaLabel = `${city}, ${country}`;
      const photographerTagline = document.createElement("h4");
      photographerTagline.textContent = tagline;
      photographerTagline.ariaLabel = `${tagline}`;
      const photographerPrice = document.createElement("p");
      photographerPrice.textContent = `${price}€/jour`;
      photographerPrice.ariaLabel = `${price}€/jour`;
  
      const photographerId = document.createElement("p");
      photographerId.textContent = `${id}`;
  
      picturePhotographerParent.appendChild(photographerPicture);
  
      photographer.appendChild(picturePhotographerParent);
      photographer.appendChild(photographerName);
      photographer.appendChild(photographerLocation);
      photographer.appendChild(photographerTagline);
      photographer.appendChild(photographerPrice);
      photographer.appendChild(photographerId);
  
      photographer.addEventListener("click", function () {
        const id = photographerId.textContent;
        location.href = `/photographer.html?id=${id}`;
      });
  
      return photographer;
    }
    return { city, country, id, name, picture, price, tagline, getUserCardDOM };
  }