export const getIdByQueryString = () => {
    const urlParams = new URLSearchParams(window.location.search)
    return parseInt(urlParams.get("id"))
  }