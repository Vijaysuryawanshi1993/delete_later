import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class WhatWeOffer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textHeading}>
                    What We Offer
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 4
    },
    textHeading: {
        padding: 4,
        alignSelf: 'stretch',
        fontWeight: 'bold',
        fontSize: 13,
        color: 'black'
    }
})