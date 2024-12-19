import { Photo } from "../components/Photo.js"
import { Video } from "../components/Video.js"

export class MediaFactory {
    static createMedia(data) {
      if (data.image) {
        return new Photo(data)
      } else if (data.video) {
        return new Video(data)
      } else {
        console.log("error")
      }
    }
  }
