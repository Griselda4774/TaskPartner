import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import GlobalStyle from "./GlobalStyle";
import { useState, useEffect } from "react";
import { SvgXml } from "react-native-svg";
import { BackIcon } from "../constants/Icons";

const CalendarTopBar = ({ onSelectedDateReceived }) => {
  //Use states:
  const [selectedDate, SetSelectedDate] = useState(new Date());

  const [currentDate, SetCurrentDate] = useState(new Date());

  const [chosenMonth, SetChosenMonth] = useState(new Date().getMonth());
  const [chosenYear, SetChosenYear] = useState(new Date().getFullYear());

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  //Function:

  // const selectedDateHandler = (date) => {
  //   SetSelectedDate(date);
  //   onSelectedDateReceived(selectedDate);
  // };

  const onNextPressHandler = () => {
    let tempMonth = chosenMonth;
    let tempYear = chosenYear;
    tempMonth = tempMonth + 1;
    if (tempMonth > 11) {
      tempYear = tempYear + 1;
      tempMonth = 0;
    }
    SetChosenMonth(tempMonth);
    SetChosenYear(tempYear);
  };

  const onPreviousPressHandler = () => {
    let tempMonth = chosenMonth;
    let tempYear = chosenYear;
    tempMonth = tempMonth - 1;
    if (tempMonth < 0) {
      tempYear = tempYear - 1;
      tempMonth = 11;
    }
    SetChosenMonth(tempMonth);
    SetChosenYear(tempYear);
  };

  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  const daysInCurrentMonth = getDaysInMonth(chosenMonth, chosenYear);

  // Update current date every second
  useEffect(() => {
    const timer = setInterval(() => {
      SetCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderDay = (item) => {
    const dayOfWeek = daysOfWeek[item.getDay()];
    const dateOfMonth = item.getDate();

    // const date = new Date();
    // const currentDayIndex = currentDate.getDay();

    const isSelected =
      item.getDate() === selectedDate.getDate() &&
      item.getMonth() === selectedDate.getMonth() &&
      selectedDate.getFullYear() === item.getFullYear();

    // //Check to see if the Date in the array is today or not
    // if (item < currentDayIndex) {
    //   date.setDate(currentDate.getDate() - (currentDayIndex - item));
    // } else if (item > currentDayIndex) {
    //   date.setDate(currentDate.getDate() + (item - currentDayIndex));
    // } else {
    //   date.setDate(currentDate.getDate());
    // }

    // const isToday =
    //   date.getDate() === currentDate.getDate() &&
    //   date.getMonth() === currentDate.getMonth() &&
    //   date.getFullYear() === currentDate.getFullYear();

    const isWeekend = item.getDay() === 0 || item.getDay() === 6 ? true : false;

    return (
      <Pressable
        onPress={() => {
          SetSelectedDate(item);
          onSelectedDateReceived(item);
        }}
        style={[
          styles.dayContainer,
          { backgroundColor: isSelected ? "#8687E7" : "#272727" },
        ]}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={[styles.dayText, isWeekend && styles.weekendText]}>
            {dayOfWeek}
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.dayText}>{dateOfMonth}</Text>
        </View>
      </Pressable>
    );
  };

  const [pressableBackIsHovering, SetPressableBackIsHovering] = useState(false);

  const BackPressInHandler = () => {
    SetPressableBackIsHovering(true);
  };

  const BackPressOutHandler = () => {
    SetPressableBackIsHovering(false);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "30%",

          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flex: 2 }}>
          <Pressable
            style={{ width: 7, height: 14, alignItems: "center" }}
            onPressIn={BackPressInHandler}
            onPressOut={BackPressOutHandler}
            onPress={onPreviousPressHandler}
            hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
          >
            <Text
              style={[
                GlobalStyle.pressable_text,
                {
                  color: pressableBackIsHovering
                    ? "#fff"
                    : "rgba(255, 255, 255, 0.44)",
                },
              ]}
            >
              <SvgXml xml={BackIcon} width={10} height={20} />
            </Text>
          </Pressable>
        </View>

        <View
          style={{ flex: 7, alignItems: "center", justifyContent: "center" }}
        >
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={styles.month_text}>{months[chosenMonth]}</Text>
            <Text style={styles.year_text}>{chosenYear}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Pressable
            style={{ width: 7, height: 14, alignItems: "center" }}
            onPressIn={BackPressInHandler}
            onPressOut={BackPressOutHandler}
            onPress={onNextPressHandler}
            hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
          >
            <Text
              style={[
                GlobalStyle.pressable_text,
                {
                  color: pressableBackIsHovering
                    ? "#fff"
                    : "rgba(255, 255, 255, 0.44)",
                },
              ]}
            >
              <SvgXml
                xml={BackIcon}
                width={10}
                height={20}
                style={{ transform: [{ rotate: "180deg" }] }}
              />
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ height: "70%", backgroundColor: "#363636" }}>
        <FlatList
          data={daysInCurrentMonth}
          horizontal
          contentContainerStyle={{ alignItems: "center" }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => renderDay(item)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#363636",
    alignItems: "center",
    justifyContent: "center",
  },

  dayContainer: {
    width: 50,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 4,
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Lato-Regular",
  },

  weekendText: {
    color: "red",
    fontFamily: "Lato-Regular",
  },

  month_text: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Lato-Regular",
  },

  year_text: {
    color: "#AFAFAF",
    fontWeight: 600,
    fontSize: 12,
    fontFamily: "Lato-Regular",
  },

  circle: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: "#8687E7",
    marginBottom: 5,
  },
});

export default CalendarTopBar;
