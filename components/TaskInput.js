import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const TaskInput = () => {
  const [task, setTask] = React.useState("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={task}
        placeholder={"Enter a task..."}
        placeholderTextColor={"grey"}
        onChangeText={(text) => {
          console.log(text);
          setTask(text);
        }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#36474F",
    flex: 3,
    padding: 10,
  },
  input: {
    margin: 5,
    color: "white",
    fontSize: 20,
    borderColor: "grey",
    borderBottomWidth: 1,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#808080",
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: "lightgrey",
    fontSize: 20,
    padding: 10,
  },
});
