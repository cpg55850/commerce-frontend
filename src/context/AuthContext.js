import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
	user: '',
	login: () => {},
	logout: () => {},
	loading: true,
})

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (sessionStorage.authenticatedUser) {
			console.log('User found in sessionStorage, setting the user...')
			setUser(sessionStorage.authenticatedUser)
		}
		setLoading(false)
	}, [])

	const login = (username, pwd) => {
		console.log('Logging in... ', username, pwd)
		sessionStorage.setItem('authenticatedUser', username)
		setUser(username)
		setLoading(false)
	}

	const logout = () => {
		sessionStorage.removeItem('authenticatedUser')
		setUser('')
		setLoading(false)
	}

	const isLoggedIn = user !== '' ? true : false

	return (
		<AuthContext.Provider value={{ user, login, logout, isLoggedIn, loading }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => React.useContext(AuthContext)
