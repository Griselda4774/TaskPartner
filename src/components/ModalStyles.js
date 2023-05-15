import { StyleSheet } from "react-native";
import {
  FULL_BUTTON_WIDTH,
  GREY_COLOR,
  HALF_BUTTON_WIDTH,
  MODAL_WIDTH,
  PURPLE_COLOR,
  SCREEN_HEIGHT,
  TITLE_MODAL_WIDTH,
  WHITE_TEXT_COLOR,
} from "../constants/Constants";

const ModalStyles = StyleSheet.create({
  wrapper: {
    //flex: 1,
    height: SCREEN_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000080",
  },
  container: {
    backgroundColor: GREY_COLOR,
    width: MODAL_WIDTH,
    borderRadius: 8,
  },
  title: {
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff80",
    width: TITLE_MODAL_WIDTH,
    alignSelf: "center",
  },
  title_white_text: {
    fontSize: 16,
    fontWeight: "500",
    color: WHITE_TEXT_COLOR,
    fontFamily: "Lato-Regular",
    letterSpacing: 0.5,
  },
  title_purple_text: {
    fontSize: 16,
    fontWeight: "500",
    color: PURPLE_COLOR,
    fontFamily: "Lato-Regular",
    letterSpacing: 0.5,
  },
  body: {
    alignItems: "center",
  },
  body_flatlistItem_text: {
    color: WHITE_TEXT_COLOR,
    fontSize: 14,
    fontFamily: "Lato-Regular",
  },
  body_text: {
    color: WHITE_TEXT_COLOR,
    fontSize: 16,
    fontFamily: "Lato-Regular",
    letterSpacing: 0.5,
  },
  item: {
    margin: 16,
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  item_wrapper: {
    height: 64,
    width: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  full_button: {
    alignItems: "center",
    padding: 20,
    backgroundColor: PURPLE_COLOR,
    width: FULL_BUTTON_WIDTH,
    alignSelf: "center",
    margin: 15,
    borderRadius: 8,
  },
  half_button_wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  half_button: {
    alignItems: "center",
    padding: 20,
    width: HALF_BUTTON_WIDTH,
    alignSelf: "center",
    margin: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  text_input: {
    backgroundColor: "transparent",
    borderRadius: 5,
    margin: 5,
    marginTop: 15,
    width: FULL_BUTTON_WIDTH,
    height: 45,
    fontSize: 16,
    fontFamily: "Lato-Regular",
  },
  priority_item: {
    alignItems: "center",
    height: 64,
    width: 64,
    borderRadius: 5,
    margin: 12,
    justifyContent: "space-evenly",
    backgroundColor: "#27272790",
  },
});

export default ModalStyles;
