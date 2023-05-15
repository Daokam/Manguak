import {  useState } from "react";

import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function MangaSearch({
  getMangaSearch,
}: {
  getMangaSearch: any;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  async function searchManga(title: string) {
    getMangaSearch(title);
  }



  return (
    <View style={styles.search}>
      <Searchbar
      blurOnSubmit={false}
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
