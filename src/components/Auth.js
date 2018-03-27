import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from "./common/Header";
import Login from "./Login";
import Register from "./Register";
import {Actions} from 'react-native-router-flux';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginClick: true,
            signUpClick: false,
            headerText: 'Login'
        }
    }

    renderMainBody() {
        if (this.state.loginClick) {
            return <Login/>
        } else if (this.state.signUpClick) {
            return <Register/>
        }

    };

    onLoginPress() {
        this.setState({loginClick: true, signUpClick: false, headerText: 'Login'});
    };

    onSignUpPress() {
        this.setState({loginClick: false, signUpClick: true, headerText: 'SignUp'})
    }

    onBackPress() {
        Actions.pop();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    iconName='arrow-back'
                    onPress={this.onBackPress.bind(this)}
                    headerText={this.state.headerText}
                />
                <View style={styles.body}>
                    <View style={styles.bodyHeader}>
                        <TouchableOpacity
                            style={this.state.loginClick ? styles.bodyHeaderButtonSelected : styles.bodyHeaderButtonUnSelected}
                            onPress={this.onLoginPress.bind(this)}>
                            <Text style={styles.bodyHeaderText}>
                                LOGIN
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.signUpClick ? styles.bodyHeaderButtonSelected : styles.bodyHeaderButtonUnSelected}
                            onPress={this.onSignUpPress.bind(this)}>
                            <Text style={styles.bodyHeaderText}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {this.renderMainBody()}
                </View>
            </View>
        );
    }
}

export default (Auth);

const styles = StyleSheet.create({
    body: {
        margin: 12,
        backgroundColor: 'white',
        flex: 1
    },
    bodyHeader: {
        flexDirection: 'row'
    },
    bodyHeaderButtonUnSelected: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
    },

    bodyHeaderButtonSelected: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#008a2a',
        borderBottomWidth: 2,
    },
    bodyHeaderText: {
        paddingVertical: 12,
        color: 'black',
        fontSize: 14,
    }
});