import React, { useState } from "react";
import {
  Modal,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Categories from "../../assets/data/Categories";
import { PURPLE_COLOR } from "../constants/Constants";
import ModalStyles from "./ModalStyles";
import { LATO_FONTS } from "../constants/Constants";
import { useFonts } from "expo-font";

const ChooseCategoriesModal = () => {
  const [selectedID, setSelectedID] = useState("1");
  const [fontsLoaded] = useFonts(LATO_FONTS);
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <Modal visible={true} transparent={true}>
      <View style={ModalStyles.wrapper}>
        <View style={ModalStyles.container}>
          <View style={ModalStyles.title}>
            <Text style={ModalStyles.title_white_text}>Choose Categories</Text>
          </View>
          <View style={ModalStyles.body}>
            <FlatList
              data={Categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  style={
                    selectedID == item.id
                      ? [ModalStyles.item, { backgroundColor: PURPLE_COLOR }]
                      : ModalStyles.item
                  }
                  onPress={() => {
                    setSelectedID(item.id);
                  }}
                >
                  <View
                    style={[
                      ModalStyles.item_wrapper,
                      { backgroundColor: item.color },
                    ]}
                  >
                    <Image source={item.src} />
                  </View>
                  <Text style={ModalStyles.body_flatlistItem_text}>
                    {item.name}
                  </Text>
                </Pressable>
              )}
              horizontal={false}
              numColumns={3}
            />
          </View>
          <TouchableOpacity style={ModalStyles.full_button} activeOpacity={0.3}>
            <Text style={ModalStyles.title_white_text}>Add Category</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChooseCategoriesModal;
