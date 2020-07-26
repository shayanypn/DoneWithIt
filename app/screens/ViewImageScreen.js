import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        resizeMethod="auto"
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
    zIndex: 9,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
    zIndex: 9,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
