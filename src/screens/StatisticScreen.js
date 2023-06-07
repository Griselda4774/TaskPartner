import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  BLACK_BACKGROUND_COLOR,
  GREY_COLOR,
  PURPLE_COLOR,
  PURPLE_SECOND_COLOR,
  SCREEN_WIDTH,
  WHITE_TEXT_COLOR,
} from "../constants/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Chart from "../components/Chart";
import LegendLabel from "../components/LegendLabel";
import { useSelector } from "react-redux";

const StatisticScreen = () => {
  const insets = useSafeAreaInsets();
  const taskList = useSelector((state) => state.tasks.tasks);

  const getWeekNumber = (date) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + (4 - (date.getDay() || 7)));
    const year = newDate.getFullYear();
    const firstDayOfYear = new Date(year, 0, 1);
    const millisecondsDiff = newDate - firstDayOfYear;
    const weekNumber = Math.ceil(millisecondsDiff / (7 * 24 * 60 * 60 * 1000));
    return weekNumber;
  };

  const [taskCompletedInWeek, setTaskCompletedInWeek] = useState(0);
  const [taskUncompletedInWeek, setTaskUncompletedInWeek] = useState(0);
  const [taskInWeek, setTaskInWeek] = useState(0);
  const [taskCompletedInMonth, setTaskCompletedInMonth] = useState(0);
  const [taskUncompletedInMonth, setTaskUncompletedInMonth] = useState(0);
  const [taskInMonth, setTaskInMonth] = useState(0);
  const [taskCompletedInYear, setTaskCompletedInYear] = useState(0);
  const [taskUncompletedInYear, setTaskUncompletedInYear] = useState(0);
  const [taskInYear, setTaskInYear] = useState(0);
  const [totalTaskCompleted, setTotalTaskCompleted] = useState(0);
  const [totalTaskUncompleted, setTotalTaskUncompleted] = useState(0);
  const [totalTask, setTotalTask] = useState(0);
  useEffect(() => {
    const thisWeek = getWeekNumber(new Date());
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();
    setTaskCompletedInWeek(
      taskList.filter(
        (task) =>
          task.isCompleted &&
          getWeekNumber(new Date(task.taskDueDate)) === thisWeek
      ).length
    );

    setTaskUncompletedInWeek(
      taskList.filter(
        (task) =>
          !task.isCompleted &&
          getWeekNumber(new Date(task.taskDueDate)) === thisWeek
      ).length
    );

    setTaskUncompletedInMonth(
      taskList.filter(
        (task) =>
          !task.isCompleted &&
          new Date(task.taskDueDate).getMonth() === thisMonth
      ).length
    );

    setTaskCompletedInMonth(
      taskList.filter(
        (task) =>
          task.isCompleted &&
          new Date(task.taskDueDate).getMonth() === thisMonth
      ).length
    );

    setTaskCompletedInYear(
      taskList.filter(
        (task) =>
          task.isCompleted &&
          new Date(task.taskDueDate).getFullYear() === thisYear
      ).length
    );

    setTaskUncompletedInYear(
      taskList.filter(
        (task) =>
          !task.isCompleted &&
          new Date(task.taskDueDate).getFullYear() === thisYear
      ).length
    );

    setTotalTaskCompleted(taskList.filter((task) => task.isCompleted).length);

    setTotalTaskUncompleted(
      taskList.filter((task) => !task.isCompleted).length
    );
  }, [taskList]);

  useEffect(() => {
    setTaskInWeek(taskCompletedInWeek + taskUncompletedInWeek);
  }, [taskCompletedInWeek, taskUncompletedInWeek]);

  useEffect(() => {
    setTaskInMonth(taskCompletedInMonth + taskUncompletedInMonth);
  }, [taskCompletedInMonth, taskUncompletedInMonth]);

  useEffect(() => {
    setTaskInYear(taskCompletedInYear + taskUncompletedInYear);
  }, [taskCompletedInYear, taskUncompletedInYear]);

  useEffect(() => {
    setTotalTask(totalTaskCompleted + totalTaskUncompleted);
  }, [totalTaskCompleted, totalTaskUncompleted]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          // paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.wrapper}>
        <View style={styles.header_wrapper}>
          <Text style={styles.header_text}>Statistic</Text>
        </View>
        <View style={styles.list_chart_wrapper}>
          <ScrollView>
            <View style={styles.chart}>
              <View style={styles.chart_infor_wrapper}>
                <Text style={styles.chart_header_text}>This week</Text>
                <Text style={styles.chart_detail_text}>
                  There {taskInWeek > 1 ? "are" : "is"}{" "}
                  {taskInWeek > 0 ? taskInWeek : "no"}{" "}
                  {taskInWeek > 1 ? "tasks" : "task"} in this week.
                </Text>
              </View>
              {taskInWeek > 0 ? (
                <View style={styles.chart_wrapper}>
                  <Chart
                    value1={taskCompletedInWeek}
                    value2={taskUncompletedInWeek}
                  />
                  <LegendLabel
                    value1={taskCompletedInWeek}
                    value2={taskUncompletedInWeek}
                  />
                </View>
              ) : null}
            </View>
            <View style={styles.chart}>
              <View style={styles.chart_infor_wrapper}>
                <Text style={styles.chart_header_text}>This month</Text>
                <Text style={styles.chart_detail_text}>
                  There {taskInMonth > 1 ? "are" : "is"}{" "}
                  {taskInMonth > 0 ? taskInMonth : "no"}{" "}
                  {taskInMonth > 1 ? "tasks" : "task"} in this month.
                </Text>
              </View>
              {taskInMonth > 0 ? (
                <View style={styles.chart_wrapper}>
                  <LegendLabel
                    value1={taskCompletedInMonth}
                    value2={taskUncompletedInMonth}
                  />
                  <Chart
                    value1={taskCompletedInMonth}
                    value2={taskUncompletedInWeek}
                  />
                </View>
              ) : null}
            </View>
            <View style={styles.chart}>
              <View style={styles.chart_infor_wrapper}>
                <Text style={styles.chart_header_text}>This year</Text>
                <Text style={styles.chart_detail_text}>
                  There {taskInYear > 1 ? "are" : "is"}{" "}
                  {taskInYear > 0 ? taskInYear : "no"}{" "}
                  {taskInYear > 1 ? "tasks" : "task"} in this year.
                </Text>
              </View>
              {taskInYear > 0 ? (
                <View style={styles.chart_wrapper}>
                  <Chart
                    value1={taskCompletedInYear}
                    value2={taskUncompletedInYear}
                  />
                  <LegendLabel
                    value1={taskCompletedInYear}
                    value2={taskUncompletedInYear}
                  />
                </View>
              ) : null}
            </View>

            <View style={styles.chart}>
              <View style={styles.chart_infor_wrapper}>
                <Text style={styles.chart_header_text}>Total</Text>
                <Text style={styles.chart_detail_text}>
                  There {totalTask > 1 ? "are" : "is"}{" "}
                  {totalTask > 0 ? totalTask : "no"}{" "}
                  {totalTask > 1 ? "tasks" : "task"} in total.
                </Text>
              </View>
              {totalTask > 0 ? (
                <View style={styles.chart_wrapper}>
                  <LegendLabel
                    value1={totalTaskCompleted}
                    value2={totalTaskUncompleted}
                  />
                  <Chart
                    value1={totalTaskCompleted}
                    value2={totalTaskUncompleted}
                  />
                </View>
              ) : null}
            </View>
          </ScrollView>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK_BACKGROUND_COLOR,
  },
  wrapper: {
    alignItems: "center",
    width: "100%",
  },
  header_wrapper: {},
  header_text: {
    color: WHITE_TEXT_COLOR,
    fontSize: 22,
    fontFamily: "Lato-Regular",
  },
  list_chart_wrapper: { width: "100%", paddingBottom: 64 },
  chart: { marginTop: 32, marginBottom: 32 },
  chart_infor_wrapper: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  chart_header_text: {
    fontFamily: "Lato-Regular",
    color: WHITE_TEXT_COLOR,
    fontSize: 20,
    marginBottom: 8,
  },
  chart_detail_text: {
    fontFamily: "Lato-Regular",
    color: WHITE_TEXT_COLOR,
    fontSize: 14,
  },
  chart_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  legend_wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    marginRight: 12,
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

export default StatisticScreen;
