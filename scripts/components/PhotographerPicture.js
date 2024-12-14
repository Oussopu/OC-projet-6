export class PhotographerPicture {
    constructor(photographer) {
        this.photographer = photographer
    }

    render() {
        return `
          <img loading="lazy" src="assets/photographers/${this.photographer.portrait}">`
    }
}
