import React, { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { useReservation } from '../context/ReservationContext'
import { useAuth } from '../context/AuthContext'
import { Typography } from '@mui/material'
import moment from 'moment'

const ReservationTable = (props) => {
  const { addReservation, removeReservation, reservation, getReservations } =
    useReservation()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      getReservations(user.id)
    }
  }, [user])

  if (reservation === 0) {
    return <></>
  }

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        My reservations
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Cubicle ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservation &&
              reservation.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.cubicle.id}
                  </TableCell>
                  <TableCell align="right">{row.cubicle.name}</TableCell>

                  <TableCell align="right">
                    {moment(row.startDate).format('MMM Do')}
                  </TableCell>
                  <TableCell align="right">
                    {moment(row.endDate).format('MMM Do')}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      type="submit"
                      color="error"
                      variant="contained"
                      onClick={() => {
                        removeReservation(row.id)
                        // showAlert(`Reservation ${row.id} deleted!`)
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default ReservationTable
