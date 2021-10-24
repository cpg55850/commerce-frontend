import { Avatar, Paper, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../context/AuthContext'
import moment from 'moment'
import CubicleTable from '../components/CubicleTable'
import { useReservation } from '../context/ReservationContext'
import { Stack } from '@mui/material'

const UserProfile = () => {
	const { user } = useAuth()
	const { reservation } = useReservation()

	return (
		<Stack spacing={2}>
			<Paper elevation={2} sx={{ p: 4 }}>
				<Avatar
					sx={{
						margin: 'auto',
						fontSize: '4rem',
						height: '150px',
						width: '150px',
					}}
				>
					{user[0]?.toUpperCase()}
				</Avatar>
				<Typography variant='h3' gutterBottom>
					{user && user}
				</Typography>
				<Typography variant='subtitle' gutterBottom>
					{moment().format('MMMM Do YYYY')}
				</Typography>
			</Paper>

			{reservation && reservation.length > 0 && (
				<Paper elevation={2} sx={{ p: 2 }}>
					<Typography variant='h4' gutterBottom>
						My reservations
					</Typography>
					<CubicleTable cubicles={reservation} showDelete />
				</Paper>
			)}
		</Stack>
	)
}

export default UserProfile
