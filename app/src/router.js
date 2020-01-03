import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {store} from "./store"
import loadable  from '@/utils/loader' 
const Home = loadable(() => import('./pages/home'))
const Login = loadable(() => import('./pages/login'))
const Registered = loadable(() => import('./pages/registered'))
export default function Router() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistStore(store)}>
				<BrowserRouter>
					<Switch>
						<Route path="/registered" component={Registered}/>
						<Route path="/login" component={Login} />
						<Route path="/" component={Home} />
					</Switch>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}
