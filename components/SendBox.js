import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SendBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.one}>One</Text>
      <Text style={styles.two}>Two</Text>
      <Text style={styles.three}>Three</Text>
      <Text style={styles.four}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 20,
    backgroundColor: "lightblue",
  },
  one: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "green",
  },
  two: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "orange",
  },
  three: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 30,
    backgroundColor: "coral",
  },
  four: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "pink",
  },
});

export default SendBox;
