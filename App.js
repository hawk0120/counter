import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const onPressIncrement = () => {
    setCounter(counter + 1);
  };

  const onPressDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={styles.row}>
        <Button
          onPress={() => onPressIncrement()}
          title="Increment"
          accessibilityLabel="Add one to the counter"
        />
        <Button
          onPress={() => onPressDecrement()}
          title="Decrement"
          accessibilityLabel="Add one to the counter"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 300,
  },
});
