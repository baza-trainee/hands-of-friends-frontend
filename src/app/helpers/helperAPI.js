import axios from "axios";

export default async function getFetchedData(type, headers) {
    try {
        const response = await axios.get(
            `https://hands-of-friends-backend.onrender.com/api/content_management/${type}`,
            { headers }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
