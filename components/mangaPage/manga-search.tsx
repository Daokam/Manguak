import { useState } from "react";
import { Manga } from "../../classes/manga";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function MangaSearch({
  setMangaSearch,
  setMangaCount,
  mangaCount,
}: {
  setMangaSearch: any;
  setMangaCount: any;
  mangaCount: number;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const base_url = "https://api.mangadex.org";

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  async function searchManga(title: string) {
    console.log("searching for ");
    const response = await fetch(
      `${base_url}/manga?title=${title}&includes[]=cover_art&includes[]=author`
    );
    const mangaJson = await response.json();
    setMangaCount(parseInt(mangaJson["total"]));
    const parsedMangas: Manga[] = parseMangas(mangaJson);
    setMangaSearch([...parsedMangas]);
  }

  const parseMangas = (mangas: any): Manga[] => {
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
        setMangaCount(mangaCount - 1);
      }
    }
    return parsedMangas;
  };

  return (
    <View style={styles.search}>
      <Searchbar
        style={{ backgroundColor: "white" }}
        placeholder="Search"
        onSubmitEditing={() => searchManga(searchQuery)}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flex: 1.2,
    backgroundColor: "#2A2525",
  },
});
