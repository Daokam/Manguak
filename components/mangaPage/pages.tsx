import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import Button from "./button";

export default function Pages({ numberOfPages }: { numberOfPages: number }) {
  const [currentPage, setCurrentPage] = useState(1);

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

  const getPageButtons = () => {
    const pageButtons = [];
    for (let i = 1; i < 6; i++) {
      pageButtons.push(
        <Button
          selected={i == currentPage}
          title={i.toString()}
          onPress={() => setCurrentPage(i)}
        ></Button>
      );
    }
    return pageButtons;
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>{getBackButton()}</View>

      <View style={styles.pageArea}>{getPageButtons()}</View>

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
  pageArea: {
    flex: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  left: {
    flex: 1,
  },
  backButton: {},

  right: {
    flex: 1,
  },
  forwardButton: {
    alignSelf: "flex-end",
  },
  pageButton: {
    height: 40,
    width: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#15EA4A",
  },
});
