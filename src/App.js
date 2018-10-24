import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';
// import Router from './Router';
// import config from './config';


class App extends Component {
    render() {
        // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <View>
                <Text>RandoHelper</Text>
            </View>
            // <Provider store={store}>
            //     <Router />
            // </Provider>
        );
    }
}

export default App;