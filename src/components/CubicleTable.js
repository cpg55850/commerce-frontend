import * as React from 'react'
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
import moment from 'moment'

const CubicleTable = (props) => {
  const { cubicles, setCubicles, inputDate } = props
  const { addReservation, removeReservation } = useReservation()
  const { user } = useAuth()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Building</TableCell>
            <TableCell align="right">Floor</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cubicles &&
            cubicles.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.building}</TableCell>
                <TableCell align="right">{row.floor}</TableCell>
                <TableCell align="right">
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      addReservation(
                        row.id,
                        user.id,
                        moment(inputDate[0]).format('YYYY-MM-DD'),
                        moment(inputDate[1]).format('YYYY-MM-DD')
                      )
                      const filtered = cubicles.filter(
                        (current) => current.id !== row.id
                      )
                      setCubicles([...filtered])
                      // showAlert(`Reservation ${row.id} added!`)
                    }}
                  >
                    Reserve Cubicle
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CubicleTable
