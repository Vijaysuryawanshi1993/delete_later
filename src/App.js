import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Routers from './Routers'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

export default class App extends React.Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Routers/>
            </Provider>
        );
    }
}