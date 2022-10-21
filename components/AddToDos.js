import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

function AddToDos({ handlePressButton }) {
  const [text, setText] = useState(" ");
  return (
    <View style={styles.form}>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Type a new todos.."
        onChangeText={(val) => {
          setText(val);
        }}
      />
      <Button
        title="Add Todos"
        color="coral"
        onPress={() => handlePressButton(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    height: 30,
    borderColor: "#ddd",
  },
  form: {
    marginBottom: 40,
  },
});

export default AddToDos;
