import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddToDos from "./components/AddToDos";

export default function App() {
  const [toDo, setToDo] = useState([
    { text: "buy coffee", id: "1" },
    { text: "create an app", id: "2" },
    { text: "play on the switch", id: "3" },
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
      return Alert.alert("OOPS!", "Type more chars in todo list!", [
        {
          text: "Understood",
          onPress: () => (alert, closed),
        },
      ]);
    }
  }

  return (
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
                <Text style={styles.items}>
                  <TodoItem item={item} handlePress={handlePress} />
                </Text>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 31,
    flex: 1,
  },
  content: {
    marginTop: 10,
  },
});
