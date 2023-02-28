import { Manga } from "./manga";

export class Action {
    type: string;
    payload: Manga[];
    constructor(type: string, payload: Manga[]) {
        this.type = type;
        this.payload = payload;
    }
}