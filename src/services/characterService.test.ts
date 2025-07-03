
import axios from 'axios';
import { getCharacterName, isCharacterAlive } from './characterService';

    jest.mock('axios')
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    afterEach(() => {
        jest.clearAllMocks();
    })

    beforeEach(() => {
        mockedAxios.get.mockResolvedValue({
            data: {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: '',
            type: '',
            gender: '',
            origin: { name: '', url: '' },
            location: { name: '', url: '' },
            image: '',
            episode: [],
            url: '',
            created: '',
            },
        });
    });

    test('getCharacterName returns Rick Sanchez', async() => {
        const name = await getCharacterName(1)
        expect(name).toBe("Rick Sanchez")
        expect(mockedAxios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/1')
    });

    test("getChracterName mocked network error throws Error on failed API call", async() => {
        mockedAxios.get.mockRejectedValue(new Error('Network Error'))
        await expect(getCharacterName(1)).rejects.toThrow(`Character with ID 1 not found`)
    })

    test("Check if character status is 'Alive' returns true for alive character", async() => {
        await expect(isCharacterAlive(1)).resolves.toBe(true)
    })

     test("Check if character status is 'Dead' returns false for dead character", async() => {
        mockedAxios.get.mockResolvedValue({
            data: {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Dead',
            species: '',
            type: '',
            gender: '',
            origin: { name: '', url: '' },
            location: { name: '', url: '' },
            image: '',
            episode: [],
            url: '',
            created: '',
            },
        });
        await expect(isCharacterAlive(1)).resolves.toBe(false)
    })

    test("isCharacterAlive throws error on API failure", async() => {
        mockedAxios.get.mockRejectedValue(new Error('Network Error'))
        await expect(isCharacterAlive(1)).rejects.toThrow(`Character with ID 1 not found`)
    })
