export class PhotographerPrice {
  constructor(photographer) {
      this.photographer = photographer
  }

  render() {
      return `
        <p>${this.photographer.price}€/jour</p>`
  }
}