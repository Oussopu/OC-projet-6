// fonction de tri par ordre de popularitee , date et ordre alphabetique 
export const sortMedias = (mediaList, sortBy) => {
    switch (sortBy) {
      case "popular":
        return mediaList.sort((a, b) => b._likes - a._likes)
      case "date":
        return mediaList.sort((a, b) => new Date(b._date) - new Date(a._date))
      case "title":
        return mediaList.sort((a, b) => a._title.localeCompare(b._title))
      default:
        console.warn("Unknown sort option:", sortBy)
        return mediaList
    }
  }