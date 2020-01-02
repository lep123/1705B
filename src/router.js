import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import loadable from './loadale'

const Home = loadable(() => import('@/pages/home'))
const Login = loadable(() => import('@/pages/login'))
const Reg = loadable(() => import('@/pages/reg'))

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/reg' component={Reg} />
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}