import { manageMedias } from "../services/manageMedias.js"
import { likesRefresh } from "../services/manageLikes.js"

export async function manageFilter() {
  const dropdown = document.getElementById("dropdown-custom")
  const selected = dropdown.querySelector(".dropdown-selected")
  const arrowMain = selected.querySelector(".arrow-icon")
  const optionsContainer = dropdown.querySelector(".dropdown-options")
  const options = optionsContainer.querySelectorAll("li")

  let isDropdownOpen = false
  let currentSelectedOption = null
  let mediaList = []

  async function renderMediaList(sortBy) {
    mediaList = await manageMedias(sortBy)
    likesRefresh(mediaList)
  }

  function initializeDefaultSelection() {
    const defaultOption = optionsContainer.querySelector('[data-value="popular"]')
    if (defaultOption) {
      currentSelectedOption = defaultOption
      currentSelectedOption.classList.add("hidden-option")
      renderMediaList()
    }
  }

  dropdown.addEventListener("click", (e) => {
    e.stopPropagation()
    isDropdownOpen = !isDropdownOpen
    optionsContainer.style.display = isDropdownOpen ? "block" : "none"
    arrowMain.classList.toggle("arrow-rotate", isDropdownOpen)

    options.forEach((option) => option.classList.remove("hidden-option"))
    if (currentSelectedOption) currentSelectedOption.classList.add("hidden-option")
  })

  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation()
      const newText = option.textContent
      selected.firstElementChild.textContent = newText

      if (currentSelectedOption) currentSelectedOption.classList.remove("hidden-option")
      currentSelectedOption = option
      currentSelectedOption.classList.add("hidden-option")

      const filter = option.getAttribute("data-value")
      renderMediaList(filter)

      isDropdownOpen = false
      optionsContainer.style.display = "none"
      arrowMain.classList.remove("arrow-rotate")
    })
  })

  document.addEventListener("click", () => {
    isDropdownOpen = false
    optionsContainer.style.display = "none"
    arrowMain.classList.remove("arrow-rotate")
  })

  initializeDefaultSelection()
}