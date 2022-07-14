import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import PublicRouter from './router/PublicRouter';
import AppLayout from './layout';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "././store/store"
function App() {
  return (
    <Provider store={store}>
      <Router>
    <AppLayout>
      <div className="hidden lg:block"></div> <PublicRouter />
    </AppLayout>
  </Router>
    </Provider>
  );
}

export default App;
