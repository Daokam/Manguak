import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import MangaList from "./manga-list";
import { Manga } from "../../classes/manga";
import { Header } from "../header";
import Pages from "./pages";

export default function MangaPage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Header title="Manga list" reload={() => {}} />
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
  },
});
