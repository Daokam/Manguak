import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IconButton, TextInput } from "react-native-paper";

export default function Pages({ numberOfPages }: { numberOfPages: number }) {
  const currentPage = 1;

  const getBackButton = () => {
    if (currentPage != 1) {
      return (
        <IconButton
          icon="arrow-left"
          iconColor="#15EA4A"
          size={26}
        ></IconButton>
      );
    } else {
      return <View></View>;
    }
  };

  const getForwardButton = () => {
    if (currentPage != numberOfPages) {
      return (
        <IconButton
          icon="arrow-right"
          iconColor="#15EA4A"
          size={26}
          style={styles.forwardButton}
          onPress={() => console.log("hello")}
        ></IconButton>
      );
    } else {
      return <View></View>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>{getBackButton()}</View>

      <View style={styles.currentPage}>
        <Text style={{ color: "#15EA4A" }}>{currentPage}</Text>
      </View>

      <View style={styles.right}>{getForwardButton()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currentPage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    flex: 2,
  },
  backButton: {},

  right: {
    flex: 2,
  },
  forwardButton: {
    alignSelf: "flex-end",
  },
});
