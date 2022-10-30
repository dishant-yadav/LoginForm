import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { TextInput, TouchableOpacity } from "react-native-web";
import { CheckBox } from "react-native-web";
// import AppLoading from "expo-app-loading";

const LoginFrom = () => {


  const [fonts, error] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
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
    fontFamily: "Poppins_500Medium",
    // backgroundColor: "wheat",
    borderRadius: "10px",
    marginVertical: "20px",
  },
  description: {
    fontSize: "22px",
    fontFamily: "Poppins_300Light",
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
    fontFamily: "Poppins_500Medium",
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
    fontFamily: "Poppins_400Regular",
    paddingHorizontal: "10px",
    paddingVertical: "5px",
  },
  checkboxText: {
    position: "relative",
    bottom: "22px",
    left: "30px",
    fontSize: "20px",
    fontFamily: "Poppins_500Medium",
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
  },
});

export default LoginFrom;
