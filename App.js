import { StyleSheet, View } from "react-native";
import TaskItems from "./components/TaskItems";

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
