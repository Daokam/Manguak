import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MangaItem from "./manga-item";
import { Manga } from "../../classes/manga";
import { Searchbar } from "react-native-paper";
import Pages from "./pages";

export default function MangaList() {
  const [mangasSearch, setMangaSearch] = useState<Manga[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const base_url = "https://api.mangadex.org";

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  async function searchManga(title: string) {
    const response = await fetch(
      `${base_url}/manga?title=${title}&includes[]=cover_art&includes[]=author`
    );

    const parsedMangas: Manga[] = parseMangas(await response.json());
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

      parsedMangas.push(new Manga(id, title, author, description, cover_id));
    }
    return parsedMangas;
  };

  const getPageArea = () => {
    if (mangasSearch == null || mangasSearch.length == 0) {
      return <View></View>;
    } else {
      return (
        <View style={styles.page}>
          {<Pages numberOfPages={mangasSearch.length}></Pages>}
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          style={{ backgroundColor: "white" }}
          placeholder="Search"
          onSubmitEditing={() => searchManga(searchQuery)}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.listArea}>
        <View style={styles.list}>
          <FlatList
            columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
            numColumns={2}
            data={mangasSearch}
            renderItem={({ item }) => MangaItem(item)}
            keyExtractor={(item: Manga) => item.id}
          />
        </View>

        {getPageArea()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  search: {
    flex: 1.2,
    backgroundColor: "#2A2525",
  },
  listArea: {
    flex: 9,
    width: "100%",
    display: "flex",
  },
  list: {
    flex: 9,
    width: "100%",
  },
  page: {
    flex: 1,
    backgroundColor: "#2A2525",
  },
});
