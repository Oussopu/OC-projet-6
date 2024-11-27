async function fetchData() {
  try {
    const response = await fetch("./data/photographers.json");
    if (!response.ok) {
      throw new Error("Erreur lors du chargement des données");
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur:", error);
    return null;
  }
}

const getIdByQueryString = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"));
};

const findPhotographerById = async () => {
  const data = await fetchData();
  const photographerId = getIdByQueryString();
  return data.photographers.find(
    (photographer) => photographer.id === photographerId
  );
};

const infoPhotographerDOM = (photographer) => {
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

const imagePhotographerDOM = (photographer) => {
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

const pricePhotographerDOM = (photographer) => {
  const pricePhotographer = document.querySelector(".price-photographer");

  pricePhotographer.innerHTML = "";

  const infoPhotographerPrice = document.createElement("p");
  infoPhotographerPrice.textContent = `${photographer.price}€/jour`;

  pricePhotographer.appendChild(infoPhotographerPrice);
  return pricePhotographer;
};

const displayPhotographerInfo = async () => {
  const photographer = await findPhotographerById();
  infoPhotographerDOM(photographer);
};

const displayPhotographerPicture = async () => {
  const photographer = await findPhotographerById();
  imagePhotographerDOM(photographer);
};

const displayPhotographerPrice = async () => {
  const photographer = await findPhotographerById();
  pricePhotographerDOM(photographer);
};

class Photo {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
  }

  render() {
    return `<div class="media">
                    <img src="assets/photographerMedia/${this._image}" alt="${this._title}">
                    <p>${this._title}</p>
                </div>`;
  }
}

class Video {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._video = data.video;
  }

  render() {
    return `<div class="media">
                    <video controls>
                    <source src="assets/photographerMedia/${this._video}" type="video/mp4">
                    </video>
                    <p>${this._title}</p>
                </div>`;
  }
}

class MediaFactory {
  static createMedia(data) {
    if (data.image) {
      return new Photo(data);
    } else if (data.video) {
      return new Video(data);
    } else {
      console.log("error");
    }
  }
}

const findPhotographerByIdFromMedia = async () => {
  const data = await fetchData();
  const photographerId = getIdByQueryString();
  const photographerMedia = data.media.filter(
    (media) => media.photographerId === photographerId
  );

  const mediaSection = document.querySelector(".media-section");

  photographerMedia.forEach((mediaData) => {
    const media = MediaFactory.createMedia(mediaData);
    mediaSection.innerHTML += media.render();
  });
};

displayPhotographerInfo();
displayPhotographerPicture();
displayPhotographerPrice();
findPhotographerByIdFromMedia();
