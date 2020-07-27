import React, { useState } from "react";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput, Text } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [firstName, setFirstName] = useState();

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
