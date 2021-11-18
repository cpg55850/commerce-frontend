import React, { useState, useEffect } from 'react'
import { useAlert } from './AlertContext'
import { useReservation } from './ReservationContext'
import axios from 'axios'

const AuthContext = React.createContext({
  user: {},
  login: () => {},
  logout: () => {},
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { showAlert } = useAlert()

  useEffect(() => {
    // If the username is stored in a session, set the user to the stored one immediately
    if (sessionStorage.currentUser) {
      console.log('User found in sessionStorage, setting the user...')
      setUser(JSON.parse(sessionStorage.currentUser))
    }
  }, [])

  const login = async (email, password) => {
    const res = await axios
      .post('users/auth', { email, password })
      .catch((err) => {
        console.log(err)
        showAlert('Incorrect email or password', 'error')
      })

    if (!res) return

    const user = res.data

    sessionStorage.setItem('currentUser', JSON.stringify(user))
    console.log('you just logged in, user is ', user)
    setUser(user)
    showAlert('Logged in successfully!')
  }

  const register = async (email, name, password) => {
    const res = await axios
      .post('/users/', { email, name, password })
      .catch((err) => {
        console.log(err)
        showAlert("Couldn't register the user", 'error')
      })

    if (!res) return

    login(email, password)
  }

  const logout = () => {
    sessionStorage.removeItem('currentUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)
