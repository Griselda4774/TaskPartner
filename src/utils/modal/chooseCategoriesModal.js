import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Categories from "../../../assets/data/Categories";
import {
  GREY_COLOR,
  PURPLE_COLOR,
  WHITE_TEXT_COLOR,
} from "../../constants/constants";
import { Divider } from "react-native-paper";

const ChooseCategoriesModal = () => {
  const [selectedID, setSelectedID] = useState("1");

  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.title_text}>Choose Categories</Text>
          </View>
          <View style={styles.body}>
            <FlatList
              data={Categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  style={
                    selectedID == item.id
                      ? [styles.item, { backgroundColor: PURPLE_COLOR }]
                      : styles.item
                  }
                  onPress={() => {
                    setSelectedID(item.id);
                  }}
                >
                  <Image source={item.src} />
                  <Text style={styles.body_text}>{item.name}</Text>
                </Pressable>
              )}
              horizontal={false}
              numColumns={3}
            />
          </View>
          <TouchableOpacity style={styles.button} activeOpacity={0.3}>
            <Text style={styles.title_text}>Add Category</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000080",
  },
  container: {
    backgroundColor: GREY_COLOR,
    width: 350,
    borderRadius: 5,
  },
  title: {
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  title_text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  body: {
    alignItems: "center",
  },
  body_text: {
    color: "#fff",
    fontSize: 14,
  },
  item: {
    margin: 18,
    alignItems: "center",
    padding: 5,
    borderRadius: 4,
  },
  button: {
    alignItems: "center",
    padding: 20,
    backgroundColor: PURPLE_COLOR,
    width: 300,
    alignSelf: "center",
    margin: 15,
    borderRadius: 5,
  },
});

export default ChooseCategoriesModal;
