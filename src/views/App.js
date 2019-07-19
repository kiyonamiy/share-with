import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from '../config/router';
import Layout from '../views/layout';
import store from '../store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
