import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

const AditionalElements = () => {
  const [inputName, setInputName] = useState(null);
  const [inputAge, setInputAge] = useState(null);
  const [name, setName] = useState("Serhii");
  const [secondPersonName, setSecondPersonName] = useState({
    name: "Jonh",
    age: "23",
  });
  const [listName, setListName] = useState([
    { name: "Peter", id: "1" },
    { name: "Michel", id: "2" },
    { name: "Richard", id: "3" },
    { name: "Frank", id: "4" },
    { name: "Joe", id: "5" },
    { name: "Ross", id: "6" },
  ]);

  const handlePress = () => {
    if (name !== "Serhii" && secondPersonName.name !== "Jonh") {
      setName("Serhii");
      setSecondPersonName({
        name: "Jonh",
        age: "23",
      });
    } else {
      setName("Simon");
      setSecondPersonName({
        name: "Bobby",
        age: "41",
      });
    }
  };

  return (
    <ScrollView>
      <Text style={styles.mainText}>Hello, my name is {name}!</Text>
      <Text style={styles.firstText}>
        My friend's name {secondPersonName.name}!
        <Text> And He is {secondPersonName.age} old!🤓</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Change the name" onPress={handlePress} />
      </View>
      <TextInput
        style={styles.textInputContainer}
        placeholder="enter your name.."
        multiline
        onChangeText={(value) => {
          setInputName(value);
        }}
      />
      <Text style={styles.firstText}>My name is: {inputName}</Text>
      <TextInput
        style={styles.textInputContainer}
        placeholder="enter your Age.."
        keyboardType="numeric"
        onChangeText={(value) => {
          setInputAge(value);
        }}
      />
      <Text style={styles.firstText}>My age is: {inputAge}</Text>
      {listName.map((value) => (
        <View style={styles.container} key={value.id}>
          <Text style={styles.listName}>{value.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default AditionalElements;

const styles = StyleSheet.create({
  mainText: {
    color: "purple",
    fontWeight: "bold",
    backgroundColor: "#ddd",
  },
  firstText: {
    color: "orange",
    backgroundColor: "lightblue",
  },
  buttonContainer: {
    marginTop: 20,
  },
  textInputContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#777",
    padding: 5,
    width: 200,
    marginBottom: 20,
  },
  listName: {
    fontSize: 24,
    margin: 10,
    padding: 10,
    backgroundColor: "lightgrey",
  },
});
