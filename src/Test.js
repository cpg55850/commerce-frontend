import React from 'react'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'

const Test = () => {
	return (
		<div>
			<Stack spacing={2} direction='row'>
				<Button variant='text'>Text</Button>
				<Button variant='contained'>Contained</Button>
				<Button variant='outlined'>Outlined</Button>
			</Stack>
		</div>
	)
}

export default Test
