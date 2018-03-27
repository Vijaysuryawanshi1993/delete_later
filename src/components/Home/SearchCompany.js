import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Header from "../common/Header";
import Input from "../common/Input";
import Button from "../common/Button";
import {Actions} from "react-native-router-flux";
import {Spinner} from "../common/Spinner";
import {connect} from "react-redux";
import {getData, searchChanged} from "../../actions";
import SearchCompanyList from "./SearchCompanyList";

class SearchCompany extends React.Component {
    onBackPress() {
        Actions.pop();
    }

    onSearchChange(text) {
        this.props.searchChanged(text);
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: "white"}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    onButtonPress() {
        console.log(this.props.searchText);
        this.props.getData(this.props.searchText);
    }

    renderButton() {
        if (this.props.isLoading) {
            return <Spinner size="large"/>;
        }
        return <Button
            buttonText="Continue"
            onPress={this.onButtonPress.bind(this)}
        />;
    }

    render() {
        return (
            <View>
                <Header
                    headerText="Search"
                    iconName="arrow-back"
                    onPress={this.onBackPress.bind(this)}
                />
                <View style={styles.container}>
                    <Input
                        placeholder="Search Company or LLP,Name,Director,Trademark"
                        onChangeText={this.onSearchChange.bind(this)}
                        value={this.props.searchText}
                    />
                </View>
                {this.renderError()}
                {this.renderButton()}
                <SearchCompanyList/>
            </View>
        );
    }
}

const mapStateToProps = ({search}) => {
    const {searchText, error, data, loading} = search;

    return {searchText, error, data, loading};
};

export default connect(mapStateToProps, {searchChanged, getData})(SearchCompany);

const styles = StyleSheet.create({
    container: {
        margin: 16,
        backgroundColor: "white",
        borderRadius: 1,
        borderWidth: 1,
        borderColor: "#b2b2b2"
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
});
