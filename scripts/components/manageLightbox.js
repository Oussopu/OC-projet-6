// gere le fonctionnement de la lightbox
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


  const waitForMedia = setInterval (() => {

    const allMedia = document.querySelectorAll(".media")
    const mediaList = Array.from(allMedia)


    if (mediaList.length > 0) {
      clearInterval(waitForMedia)
    
      let currentIndex = 0

      const showMedia = (i) => {
        currentIndex = i
        const media = mediaList[i]
        const mediaElement = media.firstElementChild
        const mediaTitle = media.querySelector(".media-name").innerText
        
        if (mediaElement.tagName === "IMG") {
          img.style.display ="flex"
          video.style.display ="none"
          img.src = mediaElement.src
          mediaToShow.style.display = "flex"
        } else if (mediaElement.tagName === "VIDEO") {
          video.style.display ="flex"
          img.style.display ="none"
          video.controls = true
          video.src = mediaElement.querySelector("source").src
          mediaToShow.style.display = "flex"
        }

        title.textContent = mediaTitle
        lightbox.style.display = "flex"
        lightbox.setAttribute("aria-hidden", "false")
        img.setAttribute("tabindex", "-1")
        video.setAttribute("tabindex", "-1")
        prevModal.focus()
      }

      const closeLightbox = () => {
        lightbox.style.display = "none"
        lightbox.setAttribute("aria-hidden", "true")
      }

      const nextMedia = () => {
        currentIndex = (currentIndex + 1) % mediaList.length
        showMedia(currentIndex)
      }

      const prevMedia = () => {
        currentIndex = (currentIndex - 1 + mediaList.length) % mediaList.length
        showMedia(currentIndex)
      }

      document.addEventListener("click", (event) => {
        if (event.target.closest(".like-button")) {
          return
        }
      
        if ((event.target.tagName === "IMG" || event.target.tagName === "VIDEO") 
        && event.target.closest(".media")) {
          const media = event.target.closest(".media")
          const index = Array.from(document.querySelectorAll(".media")).indexOf(media)
          showMedia(index)
        }
      })

      closeModal.addEventListener("click", closeLightbox)
      prevModal.addEventListener("click", prevMedia)
      nextModal.addEventListener("click", nextMedia)

      document.addEventListener("keydown", (event) => {
        if (lightbox.style.display === "flex") {
          switch (event.key) {
            case "ArrowRight":
              nextMedia()
              break
            case "ArrowLeft":
              prevMedia()
              break
            case "Escape":
              closeLightbox()
              break
          }
        }
      })
    }
  })
}
