import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Button, TextField, Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useHistory } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { useAlert } from '../context/AlertContext'

const initialValues = { email: '', password: '' }

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
})

const Login = () => {
	const history = useHistory()
	const { login } = useAuth()
	const { showAlert } = useAlert()

	const onSubmit = (values) => {
		login(values.email, values.password)
		showAlert('You logged in successfully!')
		history.push('/dashboard')
	}

	return (
		<Box
			sx={{
				'& > :not(style)': { width: '35ch' },
			}}
		>
			<Formik
				validationSchema={validationSchema}
				onSubmit={onSubmit}
				initialValues={initialValues}
			>
				{({ handleSubmit, handleChange, values, touched, errors }) => (
					<form onSubmit={handleSubmit}>
						<Grid container direction={'column'} spacing={2}>
							<Grid item>
								<TextField
									fullWidth
									id='email'
									name='email'
									label='Email'
									value={values.email}
									onChange={handleChange}
									error={touched.email && Boolean(errors.email)}
									helperText={touched.email && errors.email}
								/>
							</Grid>
							<Grid item>
								<TextField
									fullWidth
									id='password'
									name='password'
									label='Password'
									type='password'
									value={values.password}
									onChange={handleChange}
									error={touched.password && Boolean(errors.password)}
									helperText={touched.password && errors.password}
								/>
							</Grid>
							<Grid item>
								<Button
									color='primary'
									variant='contained'
									fullWidth
									type='submit'
								>
									Login
								</Button>
							</Grid>
						</Grid>
					</form>
				)}
			</Formik>
		</Box>
	)
}

export default Login
