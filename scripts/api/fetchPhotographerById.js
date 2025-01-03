import { fetchPhotographers } from "./fetchPhotographers.js"
import { getIdByQueryString } from "../utils/getIdByQueryString.js"

// recherche dans la liste des photographes, le photographe ayant le meme id que celui dans l'URL
export const fetchPhotographerById = async () => {
    const data = await fetchPhotographers()
    const photographerId = getIdByQueryString()
    return data.photographers.find(
      (photographer) => photographer.id === photographerId
    )
  }