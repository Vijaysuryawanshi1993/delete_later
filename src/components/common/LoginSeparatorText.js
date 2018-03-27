import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class LoginSeparatorText extends React.Component {
  render() {
    return (
      <View style={styles.separator}>
        <Text
          style={{
            alignSelf: "stretch",
            height: 1,
            backgroundColor: "black",
            margin: 8
          }}
        />
        <Text style={styles.separatorText}>OR</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    alignItems: "center",
    justifyContent: "center",
    margin: 8
  },
  separatorText: {
    borderWidth: 1,
    padding: 6,
    justifyContent: "center",
    fontSize: 12,
    position: "absolute",
    fontWeight: "bold",
    borderColor: "transparent",
    borderRadius: 50,
    backgroundColor: "#e9e9e9"
  }
});
