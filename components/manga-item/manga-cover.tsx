import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function MangaCover({ imgSrc }: { imgSrc: string }) {
  const [loading, setLoading] = useState(true);

  const onLoad = () => {
    setLoading(false);
  };

  const getCover = () => {
    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#47ff75" />
        </View>
      );
    } else {
      return <View></View>;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        onLoadEnd={onLoad}
        source={{ uri: imgSrc }}
        style={styles.image}
      ></Image>

      {getCover()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
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
