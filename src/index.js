import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import 'antd/dist/antd.css'
import './index.css';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store } from './store'

ReactDOM.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
         <Router />
      </PersistGate>
   </Provider>,
   document.getElementById('root')
);