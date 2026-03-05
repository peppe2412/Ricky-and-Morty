import axios from "axios";

const apiUrl = "https://rickandmortyapi.com/api";

export async function getCharacter(status = "", species = "", genders = "") {
  try {
    const response = await axios.get(`${apiUrl}/character`, {
      params: {
        status: status || undefined,
        species: species || undefined,
        gender: genders || undefined,
      },
    });
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

export async function getEpisodes() {
  try {
    const response = await axios.get(`${apiUrl}/episode`);
    return response.data.results;
  } catch (error) {
    console.error("Errore: " + error);
    throw error;
  }
}

export async function getSingleEposide(id) {
  try {
    const response = await axios.get(`${apiUrl}/episode/${id}`);
    return response.data;
  } catch (error) {
    console.error("Errore: " + error);
    throw error;
  }
}

export async function getLocations() {
  try {
    const response = await axios.get(`${apiUrl}/location`);
    return response.data.results;
  } catch (error) {
    console.error("Errore: " + error);
    throw error;
  }
}

export async function getSingleLocation(id) {
  try {
    const response = await axios.get(`${apiUrl}/location/${id}`);
    return response.data;
  } catch (error) {
    console.error("Errore: " + error);
    throw error;
  }
}
