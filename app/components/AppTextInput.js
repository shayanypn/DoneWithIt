import React from "react";
import { Text, StyleSheet, Platform, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...props }) {
  return (
    <View style={styles.contianer}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={colors.medium}
        />
      )}
      <TextInput {...props} style={defaultStyles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 10,
  },
});

export default AppTextInput;
