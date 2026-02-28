import axios from "axios";

const apiUrl = "https://rickandmortyapi.com/api/";

export default async function getCharacter() {
  try {
    const response = await axios.get(`${apiUrl}/character`);
    return response.data.results;
  } catch (error) {
    console.error("Errore: " + error);
    throw error;
  }
}
