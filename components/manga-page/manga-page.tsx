import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import MangaList from "./manga-list";
import { Header } from "../header";

export default function MangaPage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Header title="Manga List" reload={() => {}} />
      </View>
      <View style={styles.list}>
        <MangaList></MangaList>
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
    backgroundColor: "#4e524e",
  },
});
