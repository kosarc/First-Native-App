import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function TodoItem({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: "100%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 4,
    borderColor: "#ddd",
    fontWeight: "bold",
  },
});

export default TodoItem;
