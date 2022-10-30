import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = ({ route, navigation }) => {
//   console.log(route.params);
  const {userName} = route.params;

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Hi, {userName}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: "160px",
  },
  textStyle: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "600",
    color: "purple",
  },
  buttonStyle: {
    textAlign: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "purple",
    width: "150px",
    marginLeft: "100px",
    marginTop: "30px",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
    fontFamily: "bold",
  },
});

export default Home;
