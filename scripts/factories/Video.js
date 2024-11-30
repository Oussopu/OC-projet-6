export class Video {
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