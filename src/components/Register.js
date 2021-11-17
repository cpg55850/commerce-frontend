import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Button, TextField, Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useHistory } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { useAlert } from '../context/AlertContext'
import Link from '@mui/material/Link'

const initialValues = { name: '', email: '', password: '', password2: '' }

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup.string('Enter your name').required('Name is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  password2: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const Register = ({ toggleAuthType }) => {
  const history = useHistory()
  const { register } = useAuth()
  const { showAlert } = useAlert()

  const onSubmit = (values) => {
    if (values.password !== values.password2) {
      showAlert('The passwords must match.', 'error')
    } else {
      register(values.email, values.name, values.password)
    }
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
                  id="name"
                  name="name"
                  label="Name"
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  id="password2"
                  name="password2"
                  label="Repeat Password"
                  type="password"
                  value={values.password2}
                  onChange={handleChange}
                  error={touched.password2 && Boolean(errors.password2)}
                  helperText={touched.password2 && errors.password2}
                />
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Register
                </Button>
              </Grid>
              <Grid item>
                <Link onClick={() => toggleAuthType()} href="#">
                  Need to login?
                </Link>
              </Grid>
              {/* <Grid item>
								<Typography variant='subtitle' sx={{ textAlign: 'right' }}>
									Need an account?
								</Typography>
							</Grid> */}
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default Register
