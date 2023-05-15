import { View, StyleSheet, Text } from "react-native";
import { Manga } from "../../classes/manga";
import MangaCover from "./manga-cover";

export default function MangaItem(manga: Manga) {
  function getReducedTitle(title: string) {
    if (title.length > 27) {
      return title.slice(0, 27) + "...";
    } else {
      return title;
    }
  }

  function getCoverImage() {
    return `https://uploads.mangadex.org/covers/${manga.id}/${manga.image}`;
  }

  return (
    <View style={styles.item}>
      <View style={styles.mangaImage}>
        {<MangaCover imgSrc={getCoverImage()}></MangaCover>}
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{getReducedTitle(manga.title)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#2A2525",
    height: 300,
    width: 175,
    margin: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
  },
  mangaImage: {
    flex: 9,
    width: "90%",
    marginTop: 10,
  },
  titleBox: {
    flex: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});
