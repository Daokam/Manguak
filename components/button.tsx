import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

export default function Button({
  onPress,
  title,
  selected,
}: {
  onPress: () => void;
  title: string;
  selected: boolean;
}) {
  const getButtonStyle = () => {
    if (selected) {
      return { ...styles.button, backgroundColor: "#47ff75" };
    } else {
      return styles.button;
    }
  };

  const getTextColor = () => {
    if (selected) {
      return { color: "#2A2525" };
    } else {
      return { color: "#47ff75" };
    }
  };

  return (
    <TouchableRipple
      borderless={true}
      style={styles.ripple}
      rippleColor="green"
      onPress={onPress}
    >
      <View key={"uid" + title} style={getButtonStyle()}>
        <Text style={getTextColor()}>{title}</Text>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  ripple: {
    borderRadius: 10,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
