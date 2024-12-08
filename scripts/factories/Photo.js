import { fetchData } from "../api/fetchData.js";
import { updateTotalLikes } from "../components/PhotographerPrice.js";
import { getIdByQueryString } from "../utils/getIdByQueryString.js";

export class Photo {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._likes = data.likes;
    this._liked = false;
  }

  render() {
    return `
      <div class="media" data-id="${this._id}">
        <img loading="lazy" src="assets/photographerMedia/${this._image}" alt="${this._title}">
        <div class="media-info">
          <p class="media-name">${this._title}</p>
          <div class="media-likes">
            <p class="likes-count" data-id="${this._id}">${this._likes}</p>
            <button class="like-button">
              <img class="heart-empty" src="assets/icons/heartEmpty.svg" alt="">
              <img class="heart" src="assets/icons/heart.svg" alt="">
            </button>
          </div>
        </div>
      </div>`;
  }

  toggleLike() {
    if (this._liked) {
      this.dislike();
    } else {
      this.like();
    }
    this._liked = !this._liked;
  }

  like() {
    this._likes++;
    document.querySelector(`.likes-count[data-id="${this._id}"]`).textContent = this._likes;
  }

  dislike() {
    this._likes--;
    document.querySelector(`.likes-count[data-id="${this._id}"]`).textContent = this._likes;
  }
}

export const likesRefresh = async () => {
  const data = await fetchData();
  const mediaData = data.media;
  const photographerId = getIdByQueryString();
  const filteredMedia = mediaData.filter(media => media.photographerId === photographerId);
  const photos = filteredMedia.map(data => new Photo(data));

  document.querySelectorAll(".like-button").forEach(button => {
    button.addEventListener("click", event => {
      const mediaElement = event.currentTarget.closest(".media");
      const photoId = mediaElement.getAttribute("data-id");
      const photo = photos.find(photo => photo._id === parseInt(photoId, 10));

      const likeButton = event.currentTarget;
      photo.toggleLike();

      if (photo._liked) {
        likeButton.classList.add("liked");
        likeButton.querySelector(".heart-empty").style.display = "none";
        likeButton.querySelector(".heart").style.display = "block";
      } else {
        likeButton.classList.remove("liked");
        likeButton.querySelector(".heart-empty").style.display = "block";
        likeButton.querySelector(".heart").style.display = "none";
      }

      updateTotalLikes(photos);
    });
  });
};
