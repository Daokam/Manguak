import React from 'react';
import {

  View,

  StyleSheet,
  Text,
    StatusBar,
} from 'react-native';
import { Manga } from '../../classes/manga';


export default function MangaItem(manga: Manga) {
    return (
        <View style={styles.item}>
                <Text style={styles.title}>{manga.title}</Text>
                <Text style={styles.title}>{manga.author}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});