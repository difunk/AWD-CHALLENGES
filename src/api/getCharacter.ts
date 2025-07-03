import axios from "axios";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}


export async function getCharacter(id: number): Promise<Character> {
    try {
        const res = await axios.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
        return res.data;
    } catch (error) {
        throw new Error(`Character with ID ${id} not found`);
    }
}