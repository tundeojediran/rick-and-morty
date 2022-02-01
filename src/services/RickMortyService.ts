import axios from "axios";

export const BASE_URL = 'https://rickandmortyapi.com/api';

const client = axios.create({
    baseURL: BASE_URL
});

class RickMortyService {

    static fetchCharacters = async () => {
        const response = await client.get('/character');
        return response.data;
    }

    static fetchLocationDetails = async (url: string) => {

        try {
            const response = await axios.get(url);
            return response.data;
          } catch (error) {
            console.error(error);
            return '';
          }
    }

    static fetchEpisodesDetails = async (ids: number[]) => {
        const response = await client.get(`${BASE_URL}/episode/${ids}`);
        return response.data;
    }
}

export default RickMortyService;