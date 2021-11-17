import { Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user && user.name}
      </Typography>
      <Typography paragraph>
        Please get started by selecting a cubicle.
      </Typography>
    </Paper>
  )
}

export default Dashboard
