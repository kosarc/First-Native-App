import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [listName, setListName] = useState([
    { name: "Peter", id: "1" },
    { name: "Michel", id: "2" },
    { name: "Richard", id: "3" },
    { name: "Frank", id: "4" },
    { name: "Joe", id: "5" },
    { name: "Ross", id: "6" },
  ]);

  const handleOpacityPress = (index) => {
    console.log(index);
    setListName((objectOfname) => {
      return objectOfname.filter((personId) => personId.id != index);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={listName}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOpacityPress(item.id)}>
            <Text style={styles.listName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listName: {
    fontSize: 24,
    margin: 10,
    padding: 10,
    backgroundColor: "lightgrey",
  },
});
