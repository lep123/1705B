import React from 'react';
import loader from '@/utils/loader'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = loader(() => import('@/pages/home/index')) //首页
const Login = loader(() => import('@/pages/login')) //登录

export default function Router () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}