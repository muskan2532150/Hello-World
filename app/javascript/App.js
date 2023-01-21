import React from 'react';
import Greeting from './component/Greeting';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Greeting />
    </Provider>
  </div>
);

export default App;
