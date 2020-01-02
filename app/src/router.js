import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '@/pages/login'
import Home from '@/pages/home'


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
