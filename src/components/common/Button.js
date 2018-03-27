import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                              onPress={this.props.onPress}>
                <Text style={{color: 'white'}}>
                    {this.props.buttonText}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#008a2a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 12
    }
})