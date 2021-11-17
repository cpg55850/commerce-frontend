import { Avatar, Paper, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../context/AuthContext'
import moment from 'moment'
import ReservationTable from '../components/ReservationTable'
import { Stack } from '@mui/material'

const UserProfile = () => {
  const { user } = useAuth()

  return (
    <Stack spacing={2}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Avatar
          sx={{
            margin: 'auto',
            fontSize: '4rem',
            height: '150px',
            width: '150px',
          }}
        >
          {user && user.name && user.name[0].toUpperCase()}
        </Avatar>
        <Typography variant="h3" gutterBottom>
          {user && user.name}
        </Typography>
        <Typography variant="subtitle" gutterBottom>
          {moment().format('MMMM Do YYYY')}
        </Typography>
      </Paper>

      <ReservationTable />
    </Stack>
  )
}

export default UserProfile
