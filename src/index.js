import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './pages/home'

import 'antd/dist/antd.css'
import './index.css';


ReactDOM.render(
   <Home />,
   document.getElementById('root')
);