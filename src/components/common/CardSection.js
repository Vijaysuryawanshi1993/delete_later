import React from 'react';
import {View, StyleSheet} from 'react-native';

export class CardSection extends React.Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
});
