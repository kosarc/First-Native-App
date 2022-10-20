import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";

export default function App() {
  const [toDo, setToDo] = useState([
    { text: "buy coffee", id: "1" },
    { text: "create an app", id: "2" },
    { text: "play on the switch", id: "3" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <View style={styles.content}>
          {/* Form */}
          <View style={styles.list}>
            <FlatList
              data={toDo}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Text style={styles.items}>{item.text}</Text>
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
    marginTop: 2,
    flex: 1,
  },
});
