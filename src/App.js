import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'
import Cubicles from './pages/Cubicles'
import Home from './pages/Home'
import Error from './pages/404'
import { AuthContextProvider } from './context/AuthContext'
import { AlertContextProvider } from './context/AlertContext'
import { ReservationContextProvider } from './context/ReservationContext'
import Alert from './components/Alert'

const theme = createTheme({
	palette: {
		primary: {
			main: '#00674A',
			contrastText: '#fff',
		},
		secondary: {
			main: '#007AA3',
			contrastText: '#fff',
		},
	},
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<AuthContextProvider>
				<AlertContextProvider>
					<ReservationContextProvider>
						<Router>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Layout>
									<Switch>
										<Route exact path='/dashboard' component={Dashboard} />
										<Route exact path='/user' component={UserProfile} />
										<Route exact path='/cubicles' component={Cubicles} />
										<Route component={Error} />
									</Switch>
								</Layout>
							</Switch>
						</Router>
					</ReservationContextProvider>
				</AlertContextProvider>
			</AuthContextProvider>
		</ThemeProvider>
	)
}

export default App
