// fonction qui permet de rediriger sur la page d'un photographe en particulier
export const handlePhotographerCardClick = (containerSelector) => {
    const photographerCards = document.querySelectorAll(containerSelector);

    photographerCards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-id");
            location.href = `/photographer.html?id=${id}`;
        });
    });
};