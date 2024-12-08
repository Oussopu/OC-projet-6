export class Video {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._video = data.video;
    this._likes = data.likes;
    this._liked = false;
  }

  render() {
    return `<div class="media" data-id="${this._id}">
                      <video controls>
                        <source src="assets/photographerMedia/${this._video}" type="video/mp4">
                      </video>
                      <div class="media-info">
                        <p class="media-name">${this._title}</p>
                        <div class="media-likes">
                          <p class="likes-count" data-id="${this._id}">${this._likes}</p>
                          <button class="like-button">
                            <img class="heart-empty" src="assets/icons/heartEmpty.svg" alt="empty heart">
                            <img class="heart" src="assets/icons/heart.svg" alt="filled heart" style="display: none;">
                          </button>
                        </div>
                      </div>
                  </div>`;
  }
}