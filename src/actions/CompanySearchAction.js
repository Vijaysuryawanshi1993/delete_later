import {
    SEARCH_CHANGE,
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED
} from "./types";
import axios from "axios";

export const searchChanged = text => {
    console.log(text);
    return {
        type: SEARCH_CHANGE,
        payload: text
    };
};

export const getDataSuccess = data => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    };
};

const getDataFailed = () => {
    return {
        type: GET_DATA_FAILED
    };
};

export const getData = ({searchText}) => {
    console.log("GetData : " + searchText);
    return (dispatch) => {
        axios.get("http://www.mca.gov.in/mcafoportal/", {
            params: {
                companyname: searchText
            }
        })
            .then(response => {
                alert(JSON.stringify(response));
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};
