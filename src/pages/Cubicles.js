import { Button } from '@mui/material'
import React from 'react'
import DateTime from '../TestComponents/DateTime'
import ReservationTable from '../components/ReservationTable'
import { Link } from 'react-router-dom'

const Cubicles = () => {
	const [value, setValue] = React.useState([null, null])

	return (
		<div>
			<DateTime value={value} setValue={setValue} />

			{value[0] !== null && value[1] !== null && (
				<>
					<ReservationTable />
					<Button component={Link} to='/user' type='submit' variant='contained'>
						Reserve Cubicle
					</Button>
				</>
			)}
		</div>
	)
}

export default Cubicles
