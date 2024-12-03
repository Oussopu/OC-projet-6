export const manageLightbox = () => {
  const lightbox = document.querySelector(".light-box")
  const mediaToShow = document.querySelector(".media-to-show")
  const closeModal = document.querySelector(".red-cross")
  const nextModal = document.querySelector(".arrow-right")
  const prevModal = document.querySelector(".arrow-left")

  const img = document.createElement("img")
  const video = document.createElement("video")
  const title = document.createElement("p")
  title.className = "media-title"
  mediaToShow.appendChild(img)
  mediaToShow.appendChild(video)
  mediaToShow.appendChild(title)


  window.onload = () =>{
    const allMedia = document.querySelectorAll(".media")
    const mediaList = Array.from(allMedia);
    let currentIndex = 0;
    console.log(mediaList)

    const showMedia = (i) => {
      currentIndex = i
      const media = mediaList[i]
      const mediaElement = media.firstElementChild; 
      const mediaTitle = media.innerText
      
      if (mediaElement.tagName === "IMG") {
        img.style.display ="flex"
        video.style.display ="none"
        img.src = mediaElement.src;
        mediaToShow.style.display = "flex";
      } else if (mediaElement.tagName === "VIDEO") {
        video.style.display ="flex"
        img.style.display ="none"
        video.controls = true;
        video.src = mediaElement.querySelector("source").src;
        mediaToShow.style.display = "flex";
      }

      title.textContent = mediaTitle
      lightbox.style.display = "flex"
    }

    const closeLightbox = () => {
      lightbox.style.display = "none"
    }

    const nextMedia = () => {
      currentIndex = (currentIndex + 1) % mediaList.length
      showMedia(currentIndex)
    }

    const prevMedia = () => {
      currentIndex = (currentIndex - 1 + mediaList.length) % mediaList.length
      showMedia(currentIndex)
    }

    mediaList.forEach((media, index) => {
      media.addEventListener("click", () => showMedia(index))
    })

    closeModal.addEventListener("click", closeLightbox)
    prevModal.addEventListener("click", prevMedia)
    nextModal.addEventListener("click", nextMedia)
  }
}