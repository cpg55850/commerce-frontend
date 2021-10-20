import { Box, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router'

const Error = () => {
	const { pathname } = useLocation()
	return (
		<Box>
			<Typography variant='h3'>404 Error</Typography>
			<Typography paragraph>
				Sorry, a page for {pathname} could not be found.
			</Typography>
		</Box>
	)
}

export default Error
