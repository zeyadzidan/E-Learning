import axios from "axios";

const apiPath = 'https://api.unsplash.com/search/photos'
const accessKey = 'Client-ID oatGf7kwDLuAQbtuwSejSgXDu48_viJP_GYS05zdAJ8'

export const fetchImages = async (text) => {
    const response = await axios.get(apiPath, {
        headers: {
            Authorization: accessKey
        },
        params: {
            query: text
        }
    })
    return response;
}