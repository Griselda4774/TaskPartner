import React from "react";
import { PieChart } from "react-native-chart-kit";
import { View, StyleSheet } from "react-native";
import {
  GREY_COLOR,
  PURPLE_COLOR,
  PURPLE_SECOND_COLOR,
} from "../constants/constants";

const Chart = ({ value1, value2 }) => {
  const data = [
    {
      name: "Completed",
      population: value1,
      color: PURPLE_COLOR,
      legendFontColor: "#7F7F7F",
      legendFontSize: 16,
    },
    {
      name: "Uncompleted",
      population: value2,
      color: PURPLE_SECOND_COLOR,
      legendFontColor: "#7F7F7F",
      legendFontSize: 16,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: GREY_COLOR,
    backgroundGradientFromOpacity: 0.5,
    backgroundGradientTo: GREY_COLOR,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(234,234,234, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={styles.chart_wrapper}>
      <PieChart
        data={data}
        width={240}
        height={240}
        center={[40, -4]}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
        hasLegend={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chart_wrapper: {},
});

export default Chart;
