export const handlePhotographerCardClick = (containerSelector) => {
    const photographerCards = document.querySelectorAll(containerSelector);

    photographerCards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-id");
            location.href = `/photographer.html?id=${id}`;
        });
    });
};