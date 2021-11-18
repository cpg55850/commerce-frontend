import axios from 'axios'
import React, { useState } from 'react'

import { useAlert } from './AlertContext'

const ReservationContext = React.createContext([
  {
    id: '',
    name: '',
    reservation: [],
    loading: true,
  },
])

export const ReservationContextProvider = ({ children }) => {
  const [reservation, setReservation] = useState([])
  const [loading, setLoading] = useState(true)
  const { showAlert } = useAlert()

  // HTTP GET /reservations/user/id
  // Set the reservations to returned reservations
  const getReservations = async (userId) => {
    setLoading(true)
    const res = await axios.get(`reservations/user/${userId}`).catch((err) => {
      console.log(err)
      showAlert('Cannot find reservations', 'error')
    })

    if (!res) return

    console.log('res', res)
    const { data } = res
    setReservation(res.data)
    console.log('data', data)
    console.log('reservation', reservation)

    setLoading(false)
  }

  const addReservation = async (cubicle_id, user_id, start_date, end_date) => {
    setLoading(true)
    const body = {
      cubicle_id,
      user_id,
      start_date,
      end_date,
    }
    await axios.post('reservations/', body).catch((err) => console.log(err))

    const res = await axios.get(`reservations/user/${user_id}`).catch((err) => {
      console.log(err)
      showAlert('Cannot find reservations', 'error')
    })

    if (!res) return

    setReservation(res.data)
    setLoading(false)
  }

  const removeReservation = async (id) => {
    setLoading(true)
    // Create a new array of cubicles with the passed in cubicle removed
    // // Set the reservations to that new array and alert the user
    const filtered = reservation.filter((current) => current.id !== id)
    showAlert(`Reservation ${id} deleted!`)
    setReservation([...filtered])

    await axios.delete(`reservations/${id}`).catch((err) => console.log(err))
    setLoading(false)
  }

  const removeAllReservations = async () => {
    setLoading(true)
    setReservation([])
    setLoading(false)
  }

  return (
    <ReservationContext.Provider
      value={{
        reservation,
        addReservation,
        removeReservation,
        getReservations,
        removeAllReservations,
        loading,
      }}
    >
      {children}
    </ReservationContext.Provider>
  )
}

export const useReservation = () => React.useContext(ReservationContext)
