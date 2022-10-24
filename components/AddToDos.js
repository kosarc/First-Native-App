import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

function AddToDos({ handlePressButton }) {
  const [text, setText] = useState(" ");
  return (
    <View style={styles.form}>
      <TextInput
        multiline
        ref={(val) => {
          this.textInput = val;
        }}
        style={styles.input}
        placeholder="Type a new todos.."
        onChangeText={(val) => {
          setText(val);
        }}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          handlePressButton(text);
          this.textInput.clear();
        }}
      >
        <Text style={styles.title}>Add todos</Text>
      </Pressable>
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
  button: {
    marginTop: 20,
    backgroundColor: "coral",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 60,
  },
  title: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default AddToDos;
