import React, { useState } from 'react'

const AlertContext = React.createContext({ message: '', type: '' })

export const AlertContextProvider = ({ children }) => {
	const [open, setOpen] = useState(false)
	const [alertMsg, setAlertMsg] = useState(null)
	const [alertType, setAlertType] = useState('success')

	const showAlert = (alertMsg, alertType = 'success') => {
		setOpen(true)
		setAlertMsg(alertMsg)
		setAlertType(alertType)
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	return (
		<AlertContext.Provider
			value={{ open, alertMsg, alertType, showAlert, handleClose }}
		>
			{children}
		</AlertContext.Provider>
	)
}

export const useAlert = () => React.useContext(AlertContext)
