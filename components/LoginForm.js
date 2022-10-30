import React, { useState } from "react";
import {
  Easing,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox,
  Alert,
} from "react-native";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const LoginFrom = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (
      email === "mail@google.com" &&
      userName === "Dishant" &&
      password === "PASSWORD"
    ) {
      Alert.alert("Logged in successfully");
      console.log("Logged In");
      navigation.navigate("Home", { userName: `${userName}` });
    } else {
      Alert.alert("Invalid Username or Password");
      console.log("Invalid Username or Password");
    }
  };

  const [fonts, error] = useFonts({
    light: Poppins_300Light,
    regular: Poppins_400Regular,
    bold: Poppins_500Medium,
  });

  if (!fonts) {
    return <AppLoading />;
  }

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
          onChangeText={(email) => setEmail(email)}
          value={email}
        />

        <Text style={styles.inputLabel}>Enter your name</Text>
        <TextInput
          style={styles.inputField}
          autoCorrect={false}
          autoCapitalize={"none"}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
        />

        <Text style={styles.inputLabel}>Enter your password</Text>
        <TextInput
          style={styles.inputField}
          autoCorrect={false}
          autoCapitalize={"none"}
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
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
          onPress={() => submit()}
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
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: "wheat",
  },
  header: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "800",
    fontFamily: "bold",
    // backgroundColor: "wheat",
    borderRadius: 10,
    marginVertical: 20,
  },
  description: {
    fontSize: 22,
    fontFamily: "light",
    marginTop: 20,
    color: "grey",
  },
  inputContainer: {
    marginVertical: 40,
    paddingVertical: 20,
  },
  inputContainerCheckbox: {
    marginVertical: 10,
    paddingVertical: 20,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "bold",
    textTransform: "capitalize",
    marginVertical: 10,
  },
  inputField: {
    height: 50,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 5,
    backgroundColor: "lightgrey",
    fontSize: 20,
    fontFamily: "regular",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  checkboxText: {
    position: "relative",
    bottom: 22,
    left: 30,
    fontSize: 20,
    fontFamily: "bold",
  },
  buttonStyle: {
    textAlign: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "purple",
  },
  buttonText: {
    fontSize: 32,
    color: "white",
    fontWeight: "500",
    fontFamily: "bold",
  },
});

export default LoginFrom;
