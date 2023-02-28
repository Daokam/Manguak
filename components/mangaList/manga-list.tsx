import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import MangaItem from "./manga-item";
import { Manga } from "../../classes/manga";
import { Header } from "../header";

export default function MangaList() {
  const [mangasSearch, setMangaSearch] = useState<Manga[]>([]);

  async function searchManga() {
    const mangasTemp: Manga[] = [];
    const title = "Kanojyo to Himitsu to Koimoyou";
    const base_url = "https://api.mangadex.org";
    const response = await fetch(
      `${base_url}/manga?title=${title}&includes[]=cover_art&includes[]=author`
    );
    const mangas = await response.json();
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

      mangasTemp.push(new Manga(id, title, author, description, cover_id));
    }

    setMangaSearch([...mangasTemp]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Header title="Manga list" reload={searchManga} />
      </View>
      <View style={styles.list}>
        <FlatList
          data={mangasSearch}
          renderItem={({ item }) => MangaItem(item)}
          keyExtractor={(item: Manga) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  header: {
    flex: 1.3,
  },
  list: {
    flex: 9,
  },
});
