// recupere les donnees du fichier JSON et les convertie en objet js
export async function fetchPhotographers() {
    try {
      const response = await fetch("./data/photographers.json")
      if (!response.ok) {
        throw new Error("Erreur lors du chargement des données")
      }
      return await response.json()
    } catch (error) {
      console.error("Erreur:", error)
      return null
    }
  }