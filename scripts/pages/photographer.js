async function fetchData() {
    try {
        const response = await fetch('./data/photographers.json');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des données');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
        return null;
    }
}

 const getIdByQueryString = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("id"));
}

const findPhotographerById = async () => {
    const data = await fetchData();
    const photographerId = getIdByQueryString();
    return data.photographers.find(photographer => photographer.id === photographerId);
}

console.log( await findPhotographerById())