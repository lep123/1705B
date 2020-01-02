import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '@/pages/login'
import Home from '@/pages/home'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {store} from "./store"
export default function Router() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistStore(store)}>
				<BrowserRouter>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/" component={Home} />
					</Switch>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}
