import React from 'react';
import {Text, View} from 'react-native';

class ListItem extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    {this.props.listItem}
                </Text>
            </View>
        )
    }
}

export default (ListItem);