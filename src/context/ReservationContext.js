import React, { useState } from 'react'

const ReservationContext = React.createContext([
	{
		cubicleID: '',
		startTime: '',
		endTime: '',
	},
])

export const ReservationContextProvider = ({ children }) => {
	const [reservation, setReservation] = useState([])

	const addReservation = (cubicle) => {
		if (reservation.find((o) => o.id === cubicle.id)) return 'Error'

		setReservation([...reservation, { ...cubicle }])
	}

	const removeReservation = (cubicle) => {
		const filtered = reservation.filter((current) => current.id !== cubicle.id)

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
