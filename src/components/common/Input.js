import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default class Input extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder={this.props.placeholder}
          onPress={this.props.onPress}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    alignSelf: "stretch",
    color: "#000",
    padding: 15,
    fontSize: 14,
    marginHorizontal: 8,
    borderBottomColor: "#00a72c",
    borderBottomWidth: 1
  }
});
