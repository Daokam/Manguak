import { StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import Button from "../button";
import { useState } from "react";

export default function MangaListOffsetButtons({
  numberOfPages,
  changeSearchOffset,
  currentOffset,
}: {
  numberOfPages: number;
  changeSearchOffset: any;
  currentOffset: number;
}) {
  const [currentButtonPos, changeButtonPos] = useState(0);
  const getBackButton = () => {
    if (currentOffset != 0) {
      return (
        <IconButton
          icon="arrow-left"
          iconColor="#47ff75"
          size={26}
          onPress={() => {changeSearchOffset(currentOffset - 1)
          changeButtonPos(currentButtonPos - 1)}}
        ></IconButton>
      );
    } else {
      return <View></View>;
    }
  };

  const getForwardButton = () => {
    if (currentOffset + 1 != numberOfPages) {
      return (
        <IconButton
          icon="arrow-right"
          iconColor="#47ff75"
          size={26}
          style={styles.forwardButton}
          onPress={() => {changeSearchOffset(currentOffset + 1)
          changeButtonPos(currentButtonPos + 1)}}
        ></IconButton>
      );
    } else {
      return <View></View>;
    }
  };

  const getPageButtons = () => {
    const pageButtons = [];
    let startingPos = currentOffset == 0 ? 2 : currentOffset + 1;
    startingPos = startingPos > numberOfPages - 5 ? numberOfPages - 5 : startingPos;
    startingPos = startingPos < 2 ? 2 : startingPos;
    let buttonPos = 0;
    for (let i = startingPos - 1; i < startingPos + 6; i++) {
      if( i == startingPos - 1) {
        pageButtons.push(
          <Button
            key={"uid1"}
            selected={i == currentOffset + 1}
            title={"1"}
            onPress={() => {changeSearchOffset(0)
            changeButtonPos(buttonPos)}}
          ></Button>
        );
      }
      else if (i == startingPos + 5) {
        pageButtons.push(
          <Button
            key={"uid" + numberOfPages}
            selected={i == currentOffset + 1}
            title={numberOfPages.toString()}
            onPress={() => {changeSearchOffset(numberOfPages - 1)
            changeButtonPos(buttonPos)}}
          ></Button>
        );
      }
      else if(i > 0 && i <= numberOfPages) {
        pageButtons.push(
          <Button
            key={"uid" + i}
            selected={i == currentOffset + 1}
            title={i.toString()}
            onPress={() => {changeSearchOffset(i - 1)
            changeButtonPos(buttonPos)}}
          ></Button>
        );
      }
      else {
        break;
      }
      
      buttonPos++;
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
    backgroundColor: "#47ff75",
  },
});
