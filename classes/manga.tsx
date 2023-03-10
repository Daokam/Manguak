import { v4 } from 'uuid';

export class Manga {
    id: string;
    title: string;
    author: string;
    description: string;
    image: string;
    constructor(id:string, title: string, author: string, description: string, image: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.image = image;
    }
}