import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { TextInput, TouchableOpacity } from "react-native-web";
import { CheckBox } from "react-native-web";
// import AppLoading from "expo-app-loading";

const LoginFrom = () => {

  const 

  const [fonts, error] = useFonts({
    light: Poppins_300Light,
    regular: Poppins_400Regular,
    bold: Poppins_500Medium,
  });

  // if (!fonts) {
  //   return <AppLoading />;
  // }

  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Form</Text>
      <Text style={styles.description}>
        For any queries reach us at query@mail.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter your email</Text>
        <TextInput
          style={styles.inputField}
          autoCorrect={false}
          autoCapitalize={"none"}
        />

        <Text style={styles.inputLabel}>Enter your name</Text>
        <TextInput
          style={styles.inputField}
          autoCorrect={false}
          autoCapitalize={"none"}
        />

        <Text style={styles.inputLabel}>Enter your password</Text>
        <TextInput
          style={styles.inputField}
          autoCorrect={false}
          autoCapitalize={"none"}
          secureTextEntry={true}
        />

        <View style={styles.inputContainerCheckbox}>
          <CheckBox
            value={agree}
            onValueChange={() => {
              setAgree(!agree);
            }}
            color={agree ? "purple" : undefined}
          />
          <Text style={styles.checkboxText}>
            I agree to all the Terms and Conditions
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: agree ? "purple" : "grey" },
          ]}
          onPress={()=> submit()}
          disabled={!agree} 
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: "30px",
    paddingTop: "20px",
    backgroundColor: "wheat",
  },
  header: {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "800",
    fontFamily: "bold",
    // backgroundColor: "wheat",
    borderRadius: "10px",
    marginVertical: "20px",
  },
  description: {
    fontSize: "22px",
    fontFamily: "light",
    marginTop: "20px",
    color: "grey",
  },
  inputContainer: {
    marginVertical: "40px",
    paddingVertical: "20px",
  },
  inputContainerCheckbox: {
    marginVertical: "10px",
    paddingVertical: "20px",
  },
  inputLabel: {
    fontSize: "20px",
    fontWeight: "400",
    fontFamily: "bold",
    textTransform: "capitalize",
    marginVertical: "10px",
  },
  inputField: {
    height: "50px",
    borderWidth: "2px",
    borderColor: "grey",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    fontSize: "20px",
    fontFamily: "regular",
    paddingHorizontal: "10px",
    paddingVertical: "5px",
  },
  checkboxText: {
    position: "relative",
    bottom: "22px",
    left: "30px",
    fontSize: "20px",
    fontFamily: "bold",
  },
  buttonStyle: {
    textAlign: "center",
    padding: "10px",
    borderRadius: "20px",
    backgroundColor: "purple",
  },
  buttonText: {
    fontSize: "32px",
    color: "white",
    fontWeight: "500",
    fontFamily: "bold",
  },
});

export default LoginFrom;
