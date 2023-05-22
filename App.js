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
import { BLACK_BACKGROUND_COLOR, GREY_COLOR } from "./src/constants/Constants";
import DeleteTaskModal from "./src/components/DeleteTaskModal";
import EditPriorityModal from "./src/components/EditPriorityModal";
import ChoosePriorityModal from "./src/components/ChooseTaskPriority";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-modern-datepicker";

const App = () => {
  const date = new Date();
  return (
    <SafeAreaView style={styles.container}>
      <DatePicker mode="calendar" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GREY_COLOR,
  },
});

export default App;
