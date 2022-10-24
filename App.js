import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddToDos from "./components/AddToDos";

export default function App() {
  const [toDo, setToDo] = useState([
    { text: "Buy coffee", id: "1" },
    { text: "Create an app", id: "2" },
    { text: "Play on the switch", id: "3" },
  ]);
  function handlePress(itemId) {
    console.log(itemId);
    setToDo((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.id != itemId);
    });
  }

  function handlePressButton(newToDos) {
    if (newToDos.length > 3) {
      setToDo((prevToDos) => {
        return [
          {
            text: newToDos,
            id: Math.random().toString(),
          },
          ...prevToDos,
        ];
      });
    } else {
      return Alert.alert("OOPS!", "Type more chars in toDo list!", [
        {
          text: "Understood",
          onPress: () => null,
        },
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
          <View style={styles.content}>
            <AddToDos handlePressButton={handlePressButton} />
            <View style={styles.list}>
              <FlatList
                data={toDo}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TodoItem item={item} handlePress={handlePress} />
                )}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 31,
    flex: 1,
  },
  content: {
    marginTop: 10,
    flex: 1,
  },
  header: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
