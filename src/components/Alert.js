import React from 'react'
import { Alert as AlertM, Snackbar } from '@mui/material'
import { useAlert } from '../context/AlertContext'

const Alert = () => {
	const { open, handleClose, alertMsg, alertType } = useAlert()
	return (
		<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
			<AlertM severity={alertType}>{alertMsg}</AlertM>
		</Snackbar>
	)
}

export default Alert
