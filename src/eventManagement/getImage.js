import { storage } from '../firebase'
import { getDownloadURL, ref } from "firebase/storage"

async function getImage(image) {
    if(image !== null) {
        const imageURL = await getDownloadURL(ref(storage, `images/${image}`))
        return(imageURL)
    }
    else return("https://source.unsplash.com/random")
}

export default getImage;