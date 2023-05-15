export default class CommunicationService {
    base_url = "https://api.mangadex.org";
    static _instance: CommunicationService;
    static getInstance() {
        if (CommunicationService._instance == null) {
            CommunicationService._instance = new CommunicationService();
        }
        return this._instance;
    }

    async searchManga(title: string, pageOffset: number): Promise<any> {
        const response = await fetch(
            `${this.base_url}/manga?title=${title}&includes[]=cover_art&includes[]=author&limit=10&offset=${pageOffset}`
          );
      
          return await response.json();
    }

}