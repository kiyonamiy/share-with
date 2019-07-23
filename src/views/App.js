import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import RouterConfig from '../config/router';
import Layout from '../views/layout';
import store from '../store';
import history from '../utils/history';
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <RouterConfig />
        </Layout>
      </Router>
    </Provider>
  )
}

export default App;
