//cree une instance de la classe PhotographerInfo et renvoi un bloc HTML dynamique de ces donnees
export class PhotographerInfo {
    constructor(photographer) {
        this.photographer = photographer
    }

    render() {
        return `
            <h2>${this.photographer.name}</h2>
            <h3>${this.photographer.city}, ${this.photographer.country}</h3>
            <h4>${this.photographer.tagline}</h4>`
    }

    renderModalName() {
        return `
        <h2>${this.photographer.name}</h2>`
    }
}
