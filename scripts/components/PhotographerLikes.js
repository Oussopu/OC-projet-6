//cree une instance de la classe PhotographerLikes et renvoi un bloc HTML dynamique de ces donnees
export class PhotographerLikes {
    constructor(photographerMedia) {
        this.photographerMedia = photographerMedia
    }

    getTotalLikes() {
        return this.photographerMedia.reduce((sum, media) => sum + media.likes, 0)
    }

    render() {
        const totalLikes = this.getTotalLikes()
        return `
            <p>${totalLikes} <img src="assets/icons/heartBlack.svg" 
            alt="Icône de cœur" aria-hidden="true"></p>`
    }
}