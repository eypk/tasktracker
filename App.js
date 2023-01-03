import { StyleSheet, SafeAreaView, View } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItems from "./components/TaskItems";
TaskInput;

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <TaskItems />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#000",
  },
});
