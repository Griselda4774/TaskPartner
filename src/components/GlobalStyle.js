import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  image: {
    width: 213,
    height: 278,
    margin: 81,
    marginTop: 44,
  },

  body: {
    alignItems: "center",
  },

  utils_title_text: {
    fontSize: 32,
    fontWeight: 700,
    color: "#fff",
    marginTop: 50,
    fontFamily: "Lato-Regular",
  },

  utils_info_text: {
    fontSize: 16,
    fontWeight: 400,
    color: "#fff",
    alignItems: "center",
    margin: 38,
    marginTop: 42,
    textAlign: "center",
  },

  pressable: {
    width: 42,
    height: 24,
    marginLeft: 24,
  },

  pressable_text: {
    color: "rgba(255, 255, 255, 0.44)",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Lato-Regular",
  },

  next_pressable: {
    backgroundColor: "#7875FF",
    width: 90,
    height: 48,
    marginLeft: 225,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Lato-Regular",
  },

  next_pressable_text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Lato-Regular",
  },

  footer_view: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  screen_header_text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 400,
    marginBottom: 15,
    fontFamily: "Lato-Regular",
  },
});