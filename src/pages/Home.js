import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Login from '../components/Login'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Register from '../components/Register'

const Home = () => {
	const [authType, setAuthType] = useState('login')

	const toggleAuthType = () => {
		if (authType === 'login') {
			setAuthType('register')
		} else {
			setAuthType('login')
		}
	}

	return (
		<Wrapper>
			<GreenCircle />
			<YellowCircle />

			<Grid
				container
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				}}
				spacing={4}
			>
				<Grid item>
					<Typography paragraph variant='h4' gutterBottom>
						Welcome to Commerce Bank!
					</Typography>
					<Typography paragraph>Reserve a cubicle in seconds.</Typography>
				</Grid>
				<Grid item>
					<Paper
						elevation={3}
						sx={{
							padding: '2rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'white',
							borderRadius: '50%',
							height: '380px',
							width: '380px',
						}}
					>
						{authType === 'login' ? (
							<Login toggleAuthType={toggleAuthType} />
						) : (
							<Register toggleAuthType={toggleAuthType} />
						)}
					</Paper>
				</Grid>
			</Grid>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
`

const GreenCircle = styled.div`
	position: absolute;
	top: 65%;
	left: -200px;
	height: 500px;
	width: 500px;
	border-radius: 50%;
	background-color: #00674a;
	z-index: -1;
`

const YellowCircle = styled.div`
	position: absolute;
	top: 0px;
	left: 70%;
	height: 500px;
	width: 500px;
	border-radius: 50%;
	background-color: #ffd51e;
	z-index: -1;
`

export default Home
