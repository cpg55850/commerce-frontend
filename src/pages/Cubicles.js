import { Typography, Paper, Button } from '@mui/material'
import React, { useState } from 'react'
import DateTime from '../components/DateTime'
import CubicleTable from '../components/CubicleTable'
import { Stack } from '@mui/material'
import moment from 'moment'
import axios from 'axios'
import { Box } from '@mui/system'
import ReservationTable from '../components/ReservationTable'

const Cubicles = () => {
  const [inputDate, setInputDate] = useState([null, null])
  const [cubicles, setCubicles] = useState([])

  const fetchCubicles = async () => {
    const body = {
      startDate: moment(inputDate[0]).format('YYYY-MM-DD'),
      endDate: moment(inputDate[1]).format('YYYY-MM-DD'),
    }

    console.log(`/cubicles/available/${body.startDate}/${body.endDate}`)
    const res = await axios.get(
      `/cubicles/available/${body.startDate}/${body.endDate}`
    )
    setCubicles(res.data)
  }

  return (
    <Stack spacing={2}>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Reserve a Cubicle
        </Typography>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex' }}>
            <DateTime value={inputDate} setValue={setInputDate} />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginLeft: '1rem' }}
              onClick={() => fetchCubicles()}
            >
              Submit
            </Button>
          </Box>

          {cubicles.length > 0 && (
            <CubicleTable
              cubicles={cubicles}
              inputDate={inputDate}
              setCubicles={setCubicles}
            />
          )}

          {cubicles.length === 0 && (
            <Typography variant="subtitle1">
              There are no cubicles available within the date range.
            </Typography>
          )}
        </Stack>
      </Paper>

      <ReservationTable />
    </Stack>
  )
}

export default Cubicles
