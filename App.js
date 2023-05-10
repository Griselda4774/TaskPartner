import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import Categories from "./assets/data/Categories";
import ChooseCategoriesModal from "./src/utils/modal/chooseCategoriesModal";

const App = () => {
  return (
    <View style={styles.container}>
      <ChooseCategoriesModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
