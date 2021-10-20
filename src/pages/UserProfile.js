import { Avatar, Paper, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../context/AuthContext'
import moment from 'moment'
import ReservationTable from '../components/ReservationTable'

const UserProfile = () => {
	const { user } = useAuth()

	return (
		<Paper elevation={3} sx={{ p: 4 }}>
			<Avatar sx={{ margin: 'auto', height: '150px', width: '150px' }} />

			<Typography variant='h3' gutterBottom>
				{user && user}
			</Typography>
			<Typography variant='subtitle' gutterBottom>
				{moment().format('MMMM Do YYYY')}
			</Typography>
			<ReservationTable />
		</Paper>
	)
}

export default UserProfile
