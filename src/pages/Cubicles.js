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
			id: '1',
			name: 'Cubicle A',
			reservations: [
				{
					userId: '1',
					startTime: '2021-10-01',
					endTime: '2021-10-02',
				},
				{
					userId: '2',
					startTime: '2021-10-06',
					endTime: '2021-10-08',
				},
			],
		},
		{
			id: '2',
			name: 'Cubicle B',
			reservations: [
				{
					userId: '1',
					startTime: '2021-10-05',
					endTime: '2021-10-08',
				},
			],
		},
	]
	const [filteredData, setFilteredData] = useState([])
	const { reservation } = useReservation()

	const availableCubicles = (cubicles, inputStartTime, inputEndTime) => {
		const originalArray = cubicles.slice()
		let result = []

		originalArray.forEach((c) => {
			let isConflict = false

			c.reservations.forEach((r) => {
				if (
					!(
						(moment(inputStartTime).isBefore(r.startTime) &&
							moment(inputEndTime).isBefore(r.startTime)) ||
						(moment(inputStartTime).isAfter(r.endTime) &&
							moment(inputEndTime).isAfter(r.endTime))
					)
				) {
					isConflict = true
				}
			})

			console.log('iteration', c.name)
			// isConflict?
			if (!isConflict) {
				result.push(c)
				console.log('pushing now!')
			}
		})

		console.log('result', result)
		return result
	}

	useEffect(() => {
		const filteredData = availableCubicles(data, value[0], value[1])

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
