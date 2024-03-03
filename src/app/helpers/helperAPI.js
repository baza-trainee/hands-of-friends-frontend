import axios from "axios";
import { BASE_URL } from "./consts";

export default async function getFetchedData(type, headers) {
  try {
    const response = await axios.get(`${BASE_URL}content_management/${type}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.detail);
    return [];
  }
}
