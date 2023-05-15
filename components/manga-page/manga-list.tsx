import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MangaItem from "../manga-item/manga-item";
import { Manga } from "../../classes/manga";
import MangaSearch from "./manga-search";
import MangaService from "../../services/manga-service";
import MangaListOffsetButtons from "./manga-list-offset-buttons";
import { ActivityIndicator } from "react-native-paper";

export default function MangaList() {
  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const mangaService: MangaService = MangaService.getInstance();

  const changePageOffset = (newOffset: number)  => {
    setOffset(newOffset);
    setLoading(true);
    mangaService.changeSearchOffset(newOffset * 10).then((mangaList)=> {
      setMangaList(mangaList);
      setLoading(false);
    })
  }

  const searchManga = (title: string) => {
    setOffset(0);
    setLoading(true);
    mangaService.searchManga(title).then((mangaList) => {
      setMangaList(mangaList);
      setLoading(false);
    });
  };


  const getOffsetButtonsArea = () => {
    if (mangaList == null || mangaList.length == 0) {
      return <View></View>;
    } else {
      return (
        <View style={styles.offsetButtonsArea}>
          {
            <MangaListOffsetButtons
              currentOffset={offset}
              changeSearchOffset={changePageOffset}
              numberOfPages={Math.ceil((mangaService.totalMangaCount > 10000 ? 10000: mangaService.totalMangaCount ) / 10.0) }
            ></MangaListOffsetButtons>
          }
        </View>
      );
    }
  };

  const displayList = () => {
    if(loading){
      return (<View style={styles.loading}>
        <ActivityIndicator size="large" color="#47ff75" />
      </View>)
    }
    
    else {
      return (<View style={styles.list}>
        <FlatList
        ListFooterComponentStyle={{flex:1, justifyContent: 'flex-end'}}
        contentContainerStyle={{ flexGrow: 1}}

        ListFooterComponent={getOffsetButtonsArea}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          numColumns={2}
          data={mangaList}
          renderItem={({ item }) => MangaItem(item)}
          keyExtractor={(item: Manga) => item.id}
        />
      </View>)
    }
    

  };

  return (
    <View style={styles.container}>
      <MangaSearch
        getMangaSearch={searchManga}
      ></MangaSearch>
      <View style={styles.listArea}>
        
      {displayList()}
        
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
    flexGrow: 1,
  },
  offsetButtonsArea: {
    backgroundColor: "#2A2525",
    alignItems: "flex-end",
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
