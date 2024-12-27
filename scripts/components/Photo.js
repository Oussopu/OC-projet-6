export class Photo {
    constructor(data) {
      this._id = data.id
      this._photographerId = data.photographerId
      this._title = data.title
      this._image = data.image
      this._likes = data.likes
      this._liked = false
    }
  
    toggleLike() {
      if (this._liked) {
        this._likes--
      } else {
        this._likes++
      }
      this._liked = !this._liked
      return this._likes
    }
  
    render() {
      return `
        <div class="media" data-id="${this._id}">
          <img loading="lazy" src="assets/photographerMedia/${this._image}" alt="${this._title}">
          <div class="media-info">
            <p class="media-name">${this._title}</p>
            <div class="media-likes">
              <p class="likes-count" data-id="${this._id}">${this._likes}</p>
              <button class="like-button" aria-pressed="${this._liked}" aria-label="${this._liked ? "Retirer un like" : "Ajouter un like"}">
                <img class="heart-empty" src="assets/icons/heartEmpty.svg" alt="Icône cœur vide" aria-hidden="true">
                <img class="heart" src="assets/icons/heart.svg" alt="Icône cœur plein" aria-hidden="true">
              </button>
            </div>
          </div>
        </div>`
    }
  }
  