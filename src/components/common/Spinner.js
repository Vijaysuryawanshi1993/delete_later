import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export class Spinner extends React.Component {
    render() {
        return (
            <View style={styles.spinner}>
                <ActivityIndicator
                    size='large'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});