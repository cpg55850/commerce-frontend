import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useReservation } from '../context/ReservationContext'
import { useAlert } from '../context/AlertContext'
import moment from 'moment'

const CubicleTable = (props) => {
	const { cubicles, showReserve, showDelete } = props
	const { addReservation, removeReservation } = useReservation()
	const { showAlert } = useAlert()

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Cubicle ID</TableCell>
						<TableCell align='right'>Start Time</TableCell>
						<TableCell align='right'>End Time</TableCell>
						{showReserve && <TableCell align='right'></TableCell>}
						{showDelete && <TableCell align='right'></TableCell>}
					</TableRow>
				</TableHead>
				<TableBody>
					{cubicles.map((row) => (
						<TableRow
							key={row.cubicleID}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component='th' scope='row'>
								{row.cubicleID}
							</TableCell>
							<TableCell align='right'>
								{moment(row.startTime).format('MMMM Do, YYYY')}
							</TableCell>
							<TableCell align='right'>
								{moment(row.endTime).format('MMMM Do, YYYY')}
							</TableCell>
							{showReserve && (
								<TableCell align='right'>
									<Button
										type='submit'
										variant='contained'
										onClick={() => {
											addReservation(row)
											showAlert(`Reservation ${row.cubicleID} added!`)
										}}
									>
										Reserve Cubicle
									</Button>
								</TableCell>
							)}
							{showDelete && (
								<TableCell align='right'>
									<Button
										type='submit'
										color='error'
										variant='contained'
										onClick={() => {
											removeReservation(row)
											showAlert(`Reservation ${row.cubicleID} deleted!`)
										}}
									>
										Delete
									</Button>
								</TableCell>
							)}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default CubicleTable
