import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

const Buttons = () => {
	return (
		<>
			{/* <Stack spacing={2} direction='row'>
				<Button variant='text'>Text</Button>
				<Button variant='contained'>Contained</Button>
				<Button variant='outlined'>Outlined</Button>
			</Stack> */}
			<Stack direction='row' spacing={2}>
				<Button variant='outlined' startIcon={<DeleteIcon />}>
					Delete
				</Button>
				<Button variant='contained' endIcon={<SendIcon />}>
					Send
				</Button>
			</Stack>
		</>
	)
}

export default Buttons
