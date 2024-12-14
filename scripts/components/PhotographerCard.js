export class PhotographerCard {
    constructor(data) {
        this.city = data.city
        this.country = data.country
        this.id = data.id
        this.name = data.name
        this.portrait = data.portrait
        this.price = data.price
        this.tagline = data.tagline
    }

    render() {
        const picture = `assets/photographers/${this.portrait}`

        return `
        <article class="photographer-card" data-id="${this.id}">
            <div class="picture-photographer-parent">
                <img src="${picture}" alt="Photo de ${this.name}" />
            </div>
            <h2>${this.name}</h2>
            <h3>${this.city}, ${this.country}</h3>
            <h4>${this.tagline}</h4>
            <p>${this.price}€/jour</p>
        </article>`
    }
}