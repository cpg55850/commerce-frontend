import { Typography, Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import DateTime from '../components/DateTime'
import CubicleTable from '../components/CubicleTable'
import { Stack } from '@mui/material'
import moment from 'moment'
import { useReservation } from '../context/ReservationContext'
import { cubicleData } from '../constants/TempDBData'

const Cubicles = () => {
	const [inputDate, setInputDate] = useState([null, null])
	const [filteredData, setFilteredData] = useState([])
	const { reservation } = useReservation()

	// Once the user has inputted both the inputStart and inputEnd times,
	// grab the available cubicles from the backend.

	// TODO
	// /GET /cubicles
	// body: { inputStartTime, inputEndTime }

	// This filtering shouldn't be needed after the backend is implemented.
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
		// This filtering shouldn't be needed after the backend is implemented.
		const filteredData = availableCubicles(
			cubicleData,
			inputDate[0],
			inputDate[1]
		)

		setFilteredData(filteredData)
	}, [inputDate])

	return (
		<Stack spacing={2}>
			<Paper elevation={2} sx={{ p: 2 }}>
				<Typography variant='h5' gutterBottom>
					Reserve A Cubicle
				</Typography>
				<Stack spacing={2}>
					<DateTime value={inputDate} setValue={setInputDate} />

					{inputDate[0] !== null && inputDate[1] !== null && (
						<CubicleTable
							cubicles={filteredData}
							inputDate={inputDate}
							showReserve
						/>
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
