import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from 'react'
import GlobalStyle from "./GlobalStyle";
import { useState, useEffect } from "react"; 
import { SvgXml } from "react-native-svg";
import { BackIcon } from "../constants/Icons";

const CalendarTopBar = () => {

    const [selectedDate, SetSelectedDate] = useState(null);

    const [currentDate, SetCurrentDate] = useState(new Date());

    const [chosenMonth, SetChosenMonth] = useState(0);
    const [chosenYear, SetChosenYear] = useState(2023);

    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER",
                    "OCTOBER", "NOVEMBER", "DECEMBER"];
    
    const onNextPressHandler = () => {

      let tempMonth = chosenMonth;
      let tempYear = chosenYear;
      tempMonth = tempMonth + 1;
      if(tempMonth > 11)
      {
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
      if(tempMonth < 0)
      {
        tempYear = tempYear - 1;
        tempMonth = 11;
      }
      SetChosenMonth(tempMonth);
      SetChosenYear(tempYear);
    };
    

  // Update current date every minute
  useEffect(() => {
    const timer = setInterval(() => {
      SetCurrentDate(new Date());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  const daysInCurrentMonth = getDaysInMonth(
    chosenMonth,
    chosenYear,
  );

  const renderDay = (item) => {

    const dayOfWeek = daysOfWeek[item.getDay()];
    const dateOfMonth = item.getDate();

    const date = new Date();
    // const currentDayIndex = currentDate.getDay();

    // const isSelected = item === selectedDay;
    const isSelected = item.getDate() === selectedDate;

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

    function CheckIsWeekend(date)
    {
      if(date.getDay() === 0 || date.getDay() === 6)
        return true;
      return false;
    }

    const isWeekend = CheckIsWeekend(item);
      
    return (
      <Pressable
        onPress={() => SetSelectedDate(item.getDate())}
        style={[
          styles.dayContainer,
          { backgroundColor: isSelected ? "#8687E7" : "#272727" },
        ]}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={[styles.dayText, isWeekend && styles.todayText]}>
            {dayOfWeek}
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.dayText}>
            {dateOfMonth}
          </Text>
        </View>
        <View style={styles.circle}></View>
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
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
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
          <View style={{alignItems: 'center', marginTop: 10,}}>
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
}

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
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 4,
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  todayText: {
    color: "red",
  },

  month_text: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 14,
  },

  year_text: {
    color: "#AFAFAF",
    fontWeight: 600,
    fontSize: 12,
  },

  circle: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: "#8687E7",
    marginBottom: 5,
  },
});

export default CalendarTopBar