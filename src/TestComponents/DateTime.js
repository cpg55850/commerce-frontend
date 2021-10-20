import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker'

const DateTime = ({ value, setValue }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Stack spacing={3}>
				<DesktopDateRangePicker
					startText='Desktop start'
					value={value}
					onChange={(newValue) => {
						setValue(newValue)
					}}
					renderInput={(startProps, endProps) => (
						<React.Fragment>
							<TextField {...startProps} />
							<Box sx={{ mx: 2 }}> to </Box>
							<TextField {...endProps} />
						</React.Fragment>
					)}
				/>
			</Stack>
		</LocalizationProvider>
	)
}

export default DateTime
