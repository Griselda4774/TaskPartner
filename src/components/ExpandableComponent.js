import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { G, SvgXml } from "react-native-svg";
import { ArrowDownIcon, FlagIcon } from "../constants/Icons";
import {
  GREY_BACKGROUND_COLOR,
  GREY_COLOR,
  GREY_TEXT_COLOR,
  PURPLE_COLOR,
  WHITE_TEXT_COLOR,
} from "../constants/constants";
import { Tasks } from "../../assets/data/Tasks";
import CheckButton from "./CheckButton";
import Categories from "../../assets/data/Categories";

const TaskDueDateText = ({ item }) => {
  const [overTime, setOverTime] = useState(
    new Date() < new Date(item.taskDueDate)
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setOverTime(new Date() < new Date(item.taskDueDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Text
      style={
        !overTime && !item.isCompleted
          ? [styles.task_due_text, { color: "#FF000095" }]
          : [styles.task_due_text, { color: GREY_COLOR }]
      }
    >
      {new Date(item.taskDueDate).toLocaleDateString("en-CL", {
        weekday: "short",
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      })}
    </Text>
  );
};

const TaskCategory = ({ categories, item }) => {
  let category = categories.find(
    (category) => category.name == item.taskCategory
  );
  return (
    <View
      style={[
        styles.task_category_wrapper,
        { backgroundColor: category.color },
      ]}
    >
      <SvgXml xml={category.icon} height={24} width={24} />
      <Text style={styles.task_category_text}>{item.taskCategory}</Text>
    </View>
  );
};

const ExpandableComponent = ({ title, listItem, navigation, titleWidth }) => {
  const [heightLayout, setHeightLayout] = useState(0);
  const [expanded, setExpanded] = useState(true);
  useEffect(() => {
    if (expanded) {
      setHeightLayout(null);
    } else {
      setHeightLayout(0);
    }
  }, [expanded]);

  const titleOnPressHandler = () => {
    setExpanded(!expanded);
  };

  if (listItem.length == 0) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.title_wrapper, { width: titleWidth }]}
          onPress={titleOnPressHandler}
        >
          <View>
            <SvgXml
              xml={ArrowDownIcon}
              height={20}
              width={20}
              style={expanded ? null : { transform: [{ rotate: "270deg" }] }}
            />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.title_text}>{title}</Text>
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.title_text}>{listItem.length}</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: heightLayout,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <FlatList
            data={listItem}
            keyExtractor={(item) => item.taskID}
            renderItem={({ item }) => {
              const itemOnPressHandler = (item) => {
                navigation.navigate("EditTask", item);
              };
              return (
                <TouchableOpacity
                  onPress={() => {
                    itemOnPressHandler(item);
                  }}
                >
                  <View style={styles.task_item_wrapper}>
                    <View style={styles.check_button_wrapper}>
                      <CheckButton size={24} task={item} />
                    </View>
                    <View style={styles.task_infor_wrapper}>
                      <View style={styles.task_title_wrapper}>
                        <Text
                          style={
                            item.isCompleted
                              ? [
                                  styles.task_title_text,
                                  {
                                    textDecorationLine: "line-through",
                                    color: GREY_TEXT_COLOR,
                                  },
                                ]
                              : [styles.task_title_text]
                          }
                        >
                          {item.taskName}
                        </Text>
                      </View>
                      <View style={styles.task_body}>
                        <View style={styles.task_due_wrapper}>
                          <TaskDueDateText item={item} />
                        </View>
                        <View style={styles.task_type_wrapper}>
                          <TaskCategory categories={Categories} item={item} />
                          <View style={styles.task_priority_wrapper}>
                            <SvgXml xml={FlagIcon} height={20} width={20} />
                            <Text style={styles.task_priority_text}>
                              {item.taskPriority}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 16,
  },
  title_wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: GREY_BACKGROUND_COLOR,
    borderRadius: 8,
    padding: 8,
  },
  title_text: {
    color: WHITE_TEXT_COLOR,
    fontSize: 14,
  },
  task_item_wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: GREY_BACKGROUND_COLOR,
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
  },
  check_button_wrapper: {},
  task_infor_wrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    marginLeft: 12,
    marginTop: 4,
  },
  task_title_wrapper: {},
  task_title_text: {
    fontFamily: "Lato-Regular",
    color: WHITE_TEXT_COLOR,
    fontSize: 16,
  },
  task_body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  task_due_wrapper: {},
  task_due_text: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
  },
  task_type_wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 36,
  },
  task_category_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
  },
  task_category_text: {
    fontSize: 12,
    fontFamily: "Lato-Regular",
    color: "#000000",
    marginLeft: 4,
  },
  task_priority_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: PURPLE_COLOR,
    padding: 9,
    borderRadius: 4,
  },
  task_priority_text: {
    fontSize: 12,
    fontFamily: "Lato-Regular",
    color: WHITE_TEXT_COLOR,
    marginLeft: 6,
  },
});

export default ExpandableComponent;
