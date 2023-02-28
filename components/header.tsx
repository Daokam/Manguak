import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export const Header = (prop: { title: string; reload: Function }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftArea}></View>
      <View style={styles.centerArea}>
        <Text style={styles.title}>{prop.title}</Text>
      </View>
      <View style={styles.rightArea}>
        <IconButton
          icon="reload"
          iconColor="#15EA4A"
          size={40}
          onPress={() => prop.reload()}
        ></IconButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2525",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  centerArea: {
    display: "flex",
    justifyContent: "center",
    flex: 8,
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    color: "#15EA4A",
  },
  leftArea: {
    flex: 2,
  },
  rightArea: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
});
