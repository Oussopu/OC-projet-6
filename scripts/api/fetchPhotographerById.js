import { fetchPhotographers } from "./fetchPhotographers.js"
import { getIdByQueryString } from "../utils/getIdByQueryString.js"

export const fetchPhotographerById = async () => {
    const data = await fetchPhotographers()
    const photographerId = getIdByQueryString()
    return data.photographers.find(
      (photographer) => photographer.id === photographerId
    )
  }