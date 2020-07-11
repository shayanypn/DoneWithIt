import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed!");
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <StatusBar style="auto" />
      <Image source={require("./assets/icon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
