import {
  SEARCH_CHANGE,
  GET_DATA_FAILED,
  GET_DATA,
  GET_DATA_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  searchText: "",
  error: "",
  data: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_CHANGE:
      return { ...state, searchText: action.payload };

    case GET_DATA_FAILED:
      return { ...state, loading: false, error: "error" };

    case GET_DATA_SUCCESS:
      return { ...state, ...INITIAL_STATE, data: action.payload };

    case GET_DATA:
      return { ...state, loading: true, error: "" };

    default:
      return state;
  }
};
