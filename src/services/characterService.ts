import { getCharacter } from "../api/getCharacter";

export function getCharacterName(id: number): Promise<string> {
    return getCharacter(id).then((character) => character.name);
}

export function isCharacterAlive(id: number): Promise<boolean> {
    return getCharacter(id).then((character) => character.status === "Alive")
}