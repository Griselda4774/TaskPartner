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
import ChooseCategoriesModal from "./src/components/ChooseCategoriesModal";
import EditCategoriesModal from "./src/components/EditCategoryModal";
import EditTaskScreen from "./src/components/EditTaskScreen";
import EditTaskTitleModal from "./src/components/EditTaskTitleModal";
import { BLACK_BACKGROUND_COLOR } from "./src/constants/Constants";
import DeleteTaskModal from "./src/components/DeleteTaskModal";
import EditPriorityModal from "./src/components/EditPriorityModal";
import ChoosePriorityModal from "./src/components/ChooseTaskPriority";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EditTaskTitleModal />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK_BACKGROUND_COLOR,
  },
});

export default App;
