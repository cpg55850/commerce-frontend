import { Button, Typography, Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import DateTime from '../components/DateTime'
import CubicleTable from '../components/CubicleTable'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import moment from 'moment'
import { useReservation } from '../context/ReservationContext'

const Cubicles = () => {
	const [value, setValue] = useState([null, null])
	const data = [
		{
			cubicleID: '1',
			startTime: new Date(2021, 9, 27),
			endTime: new Date(2021, 9, 28),
		},
		{
			cubicleID: '2',
			startTime: new Date(2021, 9, 28),
			endTime: new Date(2021, 9, 29),
		},
		{
			cubicleID: '3',
			startTime: new Date(2021, 9, 29),
			endTime: new Date(2021, 9, 29),
		},
		{
			cubicleID: '4',
			startTime: new Date(2021, 10, 1),
			endTime: new Date(2021, 10, 4),
		},
		{
			cubicleID: '5',
			startTime: new Date(2021, 10, 4),
			endTime: new Date(2021, 10, 6),
		},
	]
	const [filteredData, setFilteredData] = useState([])
	const { reservation } = useReservation()

	useEffect(() => {
		const filteredData = data.filter(
			(current) =>
				moment(current.startTime).isSameOrAfter(value[0]) &&
				moment(current.endTime).isSameOrBefore(value[1])
		)

		setFilteredData(filteredData)
	}, [value])

	return (
		<Stack spacing={2}>
			<Paper elevation={2} sx={{ p: 2 }}>
				<Typography variant='h5' gutterBottom>
					Reserve A Cubicle
				</Typography>
				<Stack spacing={2}>
					<DateTime value={value} setValue={setValue} />

					{value[0] !== null && value[1] !== null && (
						<CubicleTable cubicles={filteredData} showReserve />
					)}
				</Stack>
			</Paper>

			{reservation && reservation.length > 0 && (
				<Paper elevation={2} sx={{ p: 2 }}>
					<Typography variant='h5' gutterBottom>
						My reservations
					</Typography>
					<CubicleTable cubicles={reservation} showDelete />
				</Paper>
			)}
		</Stack>
	)
}

export default Cubicles
