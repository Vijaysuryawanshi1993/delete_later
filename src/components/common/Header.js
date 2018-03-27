import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress} style={{justifyContent: 'center', padding: 12}}>
                    <Icon name={this.props.iconName} size={24}/>
                </TouchableOpacity>
                <View style={styles.headerViewStyle}>
                    <Text style={styles.headerTextStyle}>
                        {this.props.headerText}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        flexDirection: 'row'
    },
    headerTextStyle: {
        color: 'black',
        fontSize: 16,
        marginRight: 30
    },
    headerViewStyle: {
        alignItems: 'center',
        flex: 1,
    }
})