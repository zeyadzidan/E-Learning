import { useContext } from "react";
import ImageContext from "../Context/ImageContext"

function useImagesContext() {
    return useContext(ImageContext)
}

export default useImagesContext;