import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class OauthFbGoogle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={this.props.onPress}
            style={{ alignSelf: "stretch" }}
          >
            Login with facebook
          </Icon.Button>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon.Button
            name="google"
            backgroundColor="#EF5350"
            onPress={this.props.onPress}
            style={{ alignSelf: "stretch" }}
          >
            Login with google
          </Icon.Button>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 14,
    flexDirection: "row"
  },
  button: {
    flex: 1,
    marginHorizontal: 4
  }
});
