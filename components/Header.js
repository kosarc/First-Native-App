import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    height: 60,
  },
  title: {
    paddingTop: 15,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default Header;
