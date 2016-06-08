import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainView from './components/MainView';
import exampleApp from './reducers';

const store = createStore(exampleApp);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}
