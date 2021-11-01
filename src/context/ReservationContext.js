import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { cubicleData } from '../constants/TempDBData'
import { useAlert } from './AlertContext'
import { useAuth } from './AuthContext'

const ReservationContext = React.createContext([
	{
		id: '',
		name: '',
		reservations: [],
	},
])

export const ReservationContextProvider = ({ children }) => {
	const [reservation, setReservation] = useState([])
	const { showAlert } = useAlert()
	const { user } = useAuth()

	// Need to retrieve the currently logged in user's reservations from the backend.

	// BACKEND TODO
	// HTTP GET /reservations
	// request body: { userID }
	// Set the reservations to returned reservations

	// TEMP SOLUTION
	useEffect(() => {
		let myCubicles = []

		cubicleData.forEach((c) => {
			console.log('c', c)
			let isMatch = false
			c.reservations.forEach((r) => {
				console.log('r', r)
				console.log('r.userId', r.userId)
				console.log('user', user)
				if (r.userId === user) {
					isMatch = true
				}
			})

			if (isMatch) {
				myCubicles.push(c)
			}
		})

		console.log('setting reservations', myCubicles)
		setReservation(myCubicles)
	}, [user])

	const addReservation = (cubicle, startTime, endTime) => {
		// Check if cubicle is already reserved
		if (reservation.find((o) => o.id === cubicle.id)) {
			return showAlert(`Cubicle ${cubicle.id} already reserved.`, 'error')
		}

		// TEMP - Edit the cubicle to include the new reservation
		const newCubicle = {
			...cubicle,
			reservations: [
				...cubicle.reservations,
				{
					userId: user,
					startTime: moment(startTime).format('YYYY-MM-DD'),
					endTime: moment(endTime).format('YYYY-MM-DD'),
				},
			],
		}

		console.log(user)
		console.log(cubicle)
		console.log('new cubicle', newCubicle)

		// BACKEND TODO
		// HTTP POST /reservations
		// request body: { userID, cubicleID, startTime, endTime }
		setReservation([...reservation, newCubicle])
		showAlert(`Reservation ${cubicle.id} added!`)
	}

	const removeReservation = (cubicle) => {
		// Create a new array of cubicles with the passed in cubicle removed
		const filtered = reservation.filter((current) => current.id !== cubicle.id)

		// Set the reservations to that new array and alert the user
		showAlert(`Reservation ${cubicle.id} deleted!`)
		setReservation([...filtered])
	}

	return (
		<ReservationContext.Provider
			value={{ reservation, addReservation, removeReservation }}
		>
			{children}
		</ReservationContext.Provider>
	)
}

export const useReservation = () => React.useContext(ReservationContext)
