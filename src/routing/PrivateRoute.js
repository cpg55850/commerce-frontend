import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isLoggedIn, loading } = useAuth()

	console.log(`isLoggedIn: ${isLoggedIn}, loading: ${loading}`)

	return (
		<Route
			render={(props) =>
				!isLoggedIn && !loading ? <Redirect to='/' /> : <Component {...props} />
			}
			{...rest}
		/>
	)
}

export default PrivateRoute
