import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TaskCounter = (props) => {
  return (
    <View style={styles.counterContainer}>
      <View style={styles.counter}>
        <Text style={styles.counterText}>Tasks</Text>
        <Text style={styles.counterNo}>{props.counter}</Text>
      </View>
    </View>
  );
};

export default TaskCounter;

const styles = StyleSheet.create({
  counterContainer: {
    flex: 2,
  },
  counter: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  counterText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffa500",
  },
  counterNo: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#ffa500",
  },
});
