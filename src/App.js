import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RootStack from './navigation';
// import Router from './Router';
// import config from './config';


class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ height: '100%', backgroundColor: 'yellow' }}>
          <RootStack />
        </View>
      </Provider>
    );
  }
}

export default App;
