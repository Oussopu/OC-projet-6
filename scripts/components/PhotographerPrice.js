//cree une instance de la classe PhotographerCard et renvoi un bloc HTML dynamique de ces donnees
export class PhotographerPrice {
  constructor(photographer) {
      this.photographer = photographer
  }

  render() {
      return `
        <p aria-label="Tarif journalier du photographe">${this.photographer.price}€/jour</p>`
  }
}