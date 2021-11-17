import axios from 'axios'
import React, { useState } from 'react'

import { useAlert } from './AlertContext'

const ReservationContext = React.createContext([
  {
    id: '',
    name: '',
    reservation: [],
  },
])

export const ReservationContextProvider = ({ children }) => {
  const [reservation, setReservation] = useState([])
  const { showAlert } = useAlert()

  // HTTP GET /reservations/user/id
  // Set the reservations to returned reservations
  const getReservations = async (userId) => {
    const res = await axios.get(`reservations/user/${userId}`).catch((err) => {
      console.log(err)
      showAlert('Cannot find reservations', 'error')
    })

    if (res) {
      console.log('res', res)
      const { data } = res
      setReservation(res.data)
      console.log('data', data)
      console.log('reservation', reservation)
    }
  }

  const addReservation = async (cubicle_id, user_id, start_date, end_date) => {
    const body = {
      cubicle_id,
      user_id,
      start_date,
      end_date,
    }
    const res = await axios
      .post('reservations', body)
      .catch((err) => console.log(err))

    // Get the cubicle that the reservation was made for
    console.log('cubicle_id', cubicle_id)
    const cub = await axios
      .get(`cubicles/${cubicle_id}`)
      .catch((err) => console.log(err))

    console.log(cub.data)

    const finalResults = [...reservation, { ...res.data, cubicle: cub.data }]
    setReservation(finalResults)
  }

  const removeReservation = async (id) => {
    // Create a new array of cubicles with the passed in cubicle removed
    // // Set the reservations to that new array and alert the user
    const filtered = reservation.filter((current) => current.id !== id)
    showAlert(`Reservation ${id} deleted!`)
    setReservation([...filtered])

    await axios.delete(`reservations/${id}`).catch((err) => console.log(err))
  }

  return (
    <ReservationContext.Provider
      value={{
        reservation,
        addReservation,
        removeReservation,
        getReservations,
      }}
    >
      {children}
    </ReservationContext.Provider>
  )
}

export const useReservation = () => React.useContext(ReservationContext)
