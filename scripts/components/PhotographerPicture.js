//cree une instance de la classe PhotographerCard et renvoi un bloc HTML dynamique de ces donnees
export class PhotographerPicture {
    constructor(photographer) {
        this.photographer = photographer
    }

    render() {
        return `
          <img loading="lazy" src="assets/photographers/${this.photographer.portrait}" 
          alt="Portrait de ${this.photographer.name}">`
    }
}
