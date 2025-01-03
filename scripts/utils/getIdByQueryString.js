// lit la query string de l'URL et recupere son id
export const getIdByQueryString = () => {
    const urlParams = new URLSearchParams(window.location.search)
    return parseInt(urlParams.get("id"))
  }