import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export class InputSearch extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Icon
          style={{ paddingHorizontal: 8 }}
          name="search"
          size={20}
          color="#292929"
        />
        <Text style={styles.inputStyle}>Search by company name</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  inputStyle: {
    color: "#636363",
    padding: 12,
    flex: 1,
    fontSize: 13,
    alignSelf: "stretch"
  }
});
