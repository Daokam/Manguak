import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MangaItem from "./manga-item";
import { Manga } from "../../classes/manga";
import Pages from "./pages";
import MangaSearch from "./manga-search";

export default function MangaList() {
  const [mangasSearch, setMangaSearch] = useState<Manga[]>([]);
  const [mangaCount, setMangaCount] = useState(0);
  const [offset, changePageOffset] = useState(0);

  const getPageArea = () => {
    if (mangasSearch == null || mangasSearch.length == 0) {
      return <View></View>;
    } else {
      return (
        <View style={styles.page}>
          {
            <Pages
              currentOffset={offset}
              changeSearchOffset={changePageOffset}
              numberOfPages={Math.ceil(mangaCount / 10.0)}
            ></Pages>
          }
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <MangaSearch
        pageOffset={offset}
        setMangaSearch={setMangaSearch}
        setMangaCount={setMangaCount}
        mangaCount={mangaCount}
      ></MangaSearch>
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
