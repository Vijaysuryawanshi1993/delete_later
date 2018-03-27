import React from "react";
import {View, Text, ListView} from "react-native";
import ListItem from "./ListItem";
import {connect} from "react-redux";

class SearchCompanyList extends React.Component {
    // componentWillMount() {
    //     const ds = new ListView.DataSource({
    //         rowHasChanged: (r1, r2) => r1 !== r2
    //     });
    //
    //     this.dataSource = ds.cloneWithRows(this.props.companyList);
    // }
    //
    // renderRow(companyItem) {
    //     return <ListItem listItem={companyItem}/>
    // }

    render() {
        return (
            //<ListView
            //  dataSource={this.dataSource}
            //renderRow={this.renderRow}
            ///>

            <View>
                <Text>
                    Search Section
                </Text>
            </View>
        );
    }
}


// const mapStateToProps = state => {
//     return {companyList: state.companyList}
// }

export default (SearchCompanyList);
