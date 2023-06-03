import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Categories from "../../assets/data/Categories";
import { PURPLE_COLOR } from "../constants/constants";
import ModalStyles from "./ModalStyles";
import { SvgXml } from "react-native-svg";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions";
import { updateDocumentToFirestore } from "../firebase/task";

const EditCategoriesModal = ({ visible, onRequestClose, task }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(task.taskCategory);
  useEffect(() => {
    setSelected(task.taskCategory);
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
      animationType="slide"
    >
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
                    selected == item.name
                      ? [ModalStyles.item, { backgroundColor: PURPLE_COLOR }]
                      : ModalStyles.item
                  }
                  onPress={() => {
                    setSelected(item.name);
                  }}
                >
                  <View
                    style={[
                      ModalStyles.item_wrapper,
                      { backgroundColor: item.color },
                    ]}
                  >
                    <SvgXml xml={item.icon} height={32} width={32} />
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
          <View style={ModalStyles.half_button_wrapper}>
            <TouchableOpacity
              style={ModalStyles.half_button}
              activeOpacity={0.3}
              onPress={onRequestClose}
            >
              <Text style={ModalStyles.title_purple_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                ModalStyles.half_button,
                { backgroundColor: PURPLE_COLOR },
              ]}
              activeOpacity={0.3}
              onPress={() => {
                task.taskCategory = Categories.find((category) => {
                  return category.name == selected;
                }).name;
                dispatch(editTask(task));
                updateDocumentToFirestore(task);
                onRequestClose();
              }}
            >
              <Text style={ModalStyles.title_white_text}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditCategoriesModal;
