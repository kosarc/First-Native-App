import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function TodoItem({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={styles.wrapper}>
        <AntDesign name="delete" size={20} color="#333" />
        <Text style={styles.item}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "#ddd",
  },
  item: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18,
    color: "#333",
  },
});

export default TodoItem;
