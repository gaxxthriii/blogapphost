import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Grid container spacing={1}>
  <Grid size={{ xs: 6, md: 4}}>
  <TextField fullWidth id="outlined-basic" label="Username" variant="outlined" /> 
  </Grid><br />
  <Grid size={{ xs: 6, md: 4 }}>
  <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
  </Grid><br />
  <Grid size={{ xs: 6, md:4 }}>
  <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
  </Grid><br />
  <Grid size={{ xs: 6, md: 4 }}>
  <TextField fullWidth id="outlined-basic" label="Confirm password" variant="outlined" />
  </Grid><br />
  <Grid size={{ xs: 12, md: 12}}>
  <Button color='secondary' variant="contained">Register</Button>
  </Grid><br />
  <Grid size={{ xs: 12, md: 12}}>
  <Link to={"/"} style={{color:'purple'}}>Already registered? Login</Link><p/>
  </Grid>
  



</Grid>
  )
}

export default Signup
