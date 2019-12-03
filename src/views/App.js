import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import RouterConfig from '../config/router';
import Layout from '../views/layout';
import store from '../store';
import history from '../utils/history';

import WsMouseControl from '../components/ws-mouse-control';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <WsMouseControl>
          <Layout>
            <RouterConfig />
          </Layout>
        </WsMouseControl>
      </Router>
    </Provider>
  )
}

export default App;
