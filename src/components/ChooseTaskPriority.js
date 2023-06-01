import React, { useState } from "react";
import {
  Modal,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { PURPLE_COLOR } from "../constants/constants";
import ModalStyles from "./ModalStyles";
import { LATO_FONTS } from "../constants/constants";
import { useFonts } from "expo-font";
import Priorities from "../../assets/data/Priorities";
import { SvgXml } from "react-native-svg";
import { FlagIcon } from "../constants/Icons";

const ChoosePriorityModal = () => {
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
            <Text style={ModalStyles.title_white_text}>Task Priority</Text>
          </View>
          <View style={ModalStyles.body}>
            <FlatList
              data={Priorities}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  style={
                    selectedID == item.id
                      ? [
                          ModalStyles.priority_item,
                          { backgroundColor: PURPLE_COLOR },
                        ]
                      : ModalStyles.priority_item
                  }
                  onPress={() => {
                    setSelectedID(item.id);
                  }}
                >
                  <SvgXml xml={FlagIcon} height={28} width={28} />
                  <Text style={ModalStyles.body_text}>{item.id}</Text>
                </Pressable>
              )}
              horizontal={false}
              numColumns={4}
            />
          </View>
          <View style={ModalStyles.half_button_wrapper}>
            <TouchableOpacity
              style={ModalStyles.half_button}
              activeOpacity={0.3}
            >
              <Text style={ModalStyles.title_purple_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                ModalStyles.half_button,
                { backgroundColor: PURPLE_COLOR },
              ]}
              activeOpacity={0.3}
            >
              <Text style={ModalStyles.title_white_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChoosePriorityModal;
