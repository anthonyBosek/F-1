import axios from "axios";

const starWarsAPI = axios.create({
  baseURL: "https://sw-api.starnavi.io",
});

export const fetchHeroes = async (page = 1) => {
  try {
    const response = await starWarsAPI.get(`/people/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch heroes data.");
  }
};

export const fetchHeroById = async (heroId: number) => {
  try {
    const response = await starWarsAPI.get(`/people/${heroId}`);
    return response.data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch hero data.");
  }
};

export const fetchFilmsByHeroId = async (heroId: number) => {
  try {
    const response = await starWarsAPI.get(`/films/?characters=${heroId}`);
    return response.data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch films data.");
  }
};

export const fetchStarshipsByHeroId = async (heroId: number) => {
  try {
    const response = await starWarsAPI.get(`/starships/?pilots=${heroId}`);
    return response.data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch starships data.");
  }
};
