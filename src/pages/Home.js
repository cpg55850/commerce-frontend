import { Typography } from '@mui/material'
import React from 'react'
import Login from '../components/Login'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Home = () => {
	return (
		<Wrapper>
			<PinkCircle />
			<BlueCircle />

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
							height: '350px',
							width: '350px',
						}}
					>
						<Login />
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

const PinkCircle = styled.div`
	position: absolute;
	top: 500px;
	left: -200px;
	height: 500px;
	width: 500px;
	border-radius: 50%;
	background-color: #00674a;
	z-index: -1;
`

const BlueCircle = styled.div`
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
