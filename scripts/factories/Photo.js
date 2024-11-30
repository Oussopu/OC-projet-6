export class Photo {
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