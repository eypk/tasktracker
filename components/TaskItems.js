import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import TaskCounter from "./TaskCounter";

const TaskItems = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [taskItem, setTaskItem] = useState();

  const renderTask = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleDone(item)}
      onLongPress={() => handleRemove(item)}
    >
      <Text style={item.isDone ? styles.taskDoneText : styles.taskText}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const addTask = () => {
    setTasks([...tasks, taskItem]);
    setText("");
  };

  const handleDone = (item) => {
    let newList = tasks.map((task) => {
      if (task.id == item.id) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    setTasks(newList);
  };

  const handleRemove = (item) => {
    let newList = tasks.filter((task) => task.id != item.id);
    setTasks(newList);
  };

  useEffect(() => {
    return () => {};
  }, [tasks]);

  return (
    <View style={styles.TaskItems}>
      <TaskCounter counter={tasks.length} />

      <View style={styles.FlatListContainer}>
        <FlatList
          data={tasks}
          renderItem={renderTask}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Enter a task..."}
          value={text}
          placeholderTextColor={"grey"}
          onChangeText={(text) => {
            setText(text);
            setTaskItem({ title: text, id: tasks.length, isDone: false });
          }}
        />
        <TouchableOpacity
          disabled={!text && true}
          style={!text ? styles.buttonPassive : styles.buttonActive}
          onPress={addTask}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItems;

const styles = StyleSheet.create({
  TaskItems: {
    flex: 18,
  },

  FlatListContainer: { flex: 15 },

  inputContainer: {
    flex: 3,
    marginBottom: 30,
    borderRadius: 15,
    backgroundColor: "#36474F",
    padding: 10,
  },

  taskText: {
    flex: 1,
    margin: 10,
    fontSize: 20,
    backgroundColor: "#7DA453",
    borderRadius: 10,
    overflow: "hidden",
    padding: 5,
    color: "white",
  },

  taskDoneText: {
    flex: 1,
    margin: 10,
    fontSize: 20,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    overflow: "hidden",
    padding: 5,
    color: "grey",
    textDecorationLine: "line-through",
  },

  input: {
    margin: 5,
    color: "white",
    fontSize: 20,
    borderColor: "grey",
    borderBottomWidth: 1,
  },

  buttonActive: {
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonPassive: {
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 20,
    marginVertical: 10,
  },

  buttonText: {
    color: "lightgrey",
    fontSize: 20,
    padding: 10,
  },
});
