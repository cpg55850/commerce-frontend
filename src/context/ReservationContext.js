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
		if (reservation.find((o) => o.cubicleID === cubicle.cubicleID))
			return 'Error'

		setReservation([...reservation, { ...cubicle }])
	}

	const removeReservation = (cubicle) => {
		const filtered = reservation.filter(
			(current) => current.cubicleID !== cubicle.cubicleID
		)

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
