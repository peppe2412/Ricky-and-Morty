import axios from "axios";

const apiUrl = "https://rickandmortyapi.com/api";

export async function getCharacter() {
  try {
    const response = await axios.get(`${apiUrl}/character`);
    return response.data.results;
  } catch (error) {
    console.error("Errore: " + error);
    throw error;
  }
}

export async function getSingleCharacter(id) {
  try {
    const response = await axios.get(`${apiUrl}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error("Errore: " + error);
    throw error;
  }
}
