import { fetchData } from "./fetchData.js";
import { getIdByQueryString } from "../utils/getIdByQueryString.js"

export const findPhotographerById = async () => {
    const data = await fetchData();
    const photographerId = getIdByQueryString();
    return data.photographers.find(
      (photographer) => photographer.id === photographerId
    );
  };