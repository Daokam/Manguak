import { Manga } from "../classes/manga";
import CommunicationService from "./communication-service";

export default class MangaService {
    static _instance: MangaService;
    communicationService: CommunicationService = CommunicationService.getInstance();
    totalMangaCount: number = 0;
    currentTitle: string = "";
    static getInstance() {
        if (MangaService._instance == null) {
            MangaService._instance = new MangaService();
        }
        return this._instance;
    }

    
    async searchManga(title: string): Promise<Manga[]> {
        this.currentTitle = title;
        const mangaList = await this.communicationService.searchManga(title, 0).then((response) => {
            this.totalMangaCount = parseInt(response["total"]);
            return this.parseMangas(response);
        });
        return mangaList;
    }

    parseMangas(mangas: any): Manga[] {
        const parsedMangas: Manga[] = [];
        for (const manga of mangas["data"]) {
          const id = manga["id"];
          const title = manga["attributes"]["title"]["en"];
          let author = "";
          const description = manga["attributes"]["description"]["en"];
          let cover_id = "";
          for (const cover of manga["relationships"]) {
            if (cover["type"] == "cover_art") {
              cover_id = cover["attributes"]["fileName"];
            }
            if (cover["type"] == "author") {
              author = cover["attributes"]["name"];
            }
          }
          if (title != null && title != undefined && title != "") {
            parsedMangas.push(new Manga(id, title, author, description, cover_id));
          } else {
            this.totalMangaCount = this.totalMangaCount - 1;
          }
        }
        return parsedMangas;
      };

      async changeSearchOffset(newOffset: number): Promise<Manga[]> {
        const mangaList = await this.communicationService.searchManga(this.currentTitle, newOffset).then((response) => {
            return this.parseMangas(response);
        });
        return mangaList;
      }
}