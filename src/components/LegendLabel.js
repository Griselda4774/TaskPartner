import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  PURPLE_COLOR,
  PURPLE_SECOND_COLOR,
  WHITE_TEXT_COLOR,
} from "../constants/constants";

const LegendLabel = ({ value1, value2 }) => {
  return (
    <View style={styles.legend_wrapper}>
      <View style={styles.legend_item}>
        <View
          style={[styles.legend_color, { backgroundColor: PURPLE_COLOR }]}
        ></View>
        <Text style={styles.legend_text}>Completed ({value1})</Text>
      </View>
      <View style={styles.legend_item}>
        <View
          style={[
            styles.legend_color,
            { backgroundColor: PURPLE_SECOND_COLOR },
          ]}
        ></View>
        <Text style={styles.legend_text}>Uncompleted ({value2})</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  legend_wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    marginRight: 8,
    marginLeft: 8,
  },
  legend_item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  legend_color: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  legend_text: {
    fontSize: 16,
    color: WHITE_TEXT_COLOR,
    fontFamily: "Lato-Regular",
    marginLeft: 12,
  },
});

export default LegendLabel;
