import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./common/Header";
import OauthFbGoogle from "./common/OauthFbGoogle";
import LoginSeparatorText from "./common/LoginSeparatorText";
import Input from "./common/Input";
import Button from "./common/Button";

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <OauthFbGoogle />
        <LoginSeparatorText />
        <Text style={styles.message}>Enter email or phone number to login</Text>
        <Input placeholder="E-Mail/Mobile Number" />
        <Input placeholder="Password" secureTextEntry />
        <Button buttonText="Continue" />
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  message: {
    alignSelf: "stretch",
    textAlign: "center",
    padding: 12
  }
});
