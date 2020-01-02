import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Router from './router'
import './index.css';
//

ReactDOM.render(
    <Router />, 
    document.getElementById('root')
);
=======
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './pages/home'

import 'antd/dist/antd.css'
import './index.css';


ReactDOM.render(
   <Home />,
   document.getElementById('root')
);
>>>>>>> a2e58671daeff2918dacbfad04effae8be914e30
