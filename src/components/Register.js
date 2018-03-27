import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import OauthFbGoogle from "./common/OauthFbGoogle";
import LoginSeparatorText from "./common/LoginSeparatorText";
import Input from "./common/Input";
import Button from "./common/Button";

class Register extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <OauthFbGoogle/>
                    <LoginSeparatorText/>
                    <Text style={styles.message}>
                        Sign up using email and phone
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flex: 1}}>
                            <Input placeholder='First Name'/>
                        </View>
                        <View style={{flex: 1}}>
                            <Input placeholder='Last Name'/>
                        </View>
                    </View>
                    <Input placeholder='E-Mail'/>
                    <Input placeholder='Mobile Number'/>
                    <Input placeholder='Password'
                           secureTextEntry/>

                    <Text style={styles.message2}
                          numberOfLines={2}>
                        By creating an account, you are accepting that you have read and agree to the Privacy Policy and
                        Terms of Use
                    </Text>

                    <Button buttonText='Sign Up'/>
                </View>
            </ScrollView>
        );
    }
}

export default (Register);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    message: {
        alignSelf: 'stretch',
        textAlign: 'center',
        padding: 12
    },
    message2: {
        alignSelf: 'stretch',
        textAlign: 'center',
        padding: 12,
        fontSize: 14
    },

});