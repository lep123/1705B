import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import loadable  from '@/utils/loader' 

const Home = loadable(() => import('./pages/home'))
const Login = loadable(() => import('./pages/login'))

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	)
}
