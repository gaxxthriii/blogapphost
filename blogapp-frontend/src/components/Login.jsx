import { Button, TextField } from '@mui/material'
import { blue, blueGrey } from '@mui/material/colors'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [form,setForm]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();//react hook 
  function capValue(){
//console.log(form);
axios.post('/api/user/login',form).then((res)=>{
// alert ('Login Successful');
// console.log(res)
alert(res.data.message)
if(res.data.jtoken){
  localStorage.setItem('logintoken',res.data.jtoken);

navigate('/Blog')}
}).catch ((err)=>{
  // alert('invalid login');
  // console.log(err)
  alert(err)
})

  }
  return (
    <div style={{marginTop:'5%', textAlign:'center'}}>
        <h1 style={{color:'brown'}}>BlogApp Login</h1>
    <div>
        <TextField variant='outlined' color='primary' label='Email' name='email' onChange={(e)=>{
          setForm({...form,email:e.target.value})
        }} ></TextField>
    </div><br />
    <div>
        <TextField variant='outlined' color='primary' label='Password' name='password' onChange={(e)=>{
          setForm({...form,password:e.target.value})
        }}></TextField> 
    </div><br />
    <div>
        {/* <Button variant='contained' sx={{backgroundColor:'#af1281',color:'white'}}>LOGIN</Button> */}
        <Button
  variant='contained'
  sx={{ backgroundColor: 'brown', color: 'white' }}
  onClick={capValue()}>LOGIN</Button>

<p style={{ textAlign: 'center', marginTop: '15px', color:'grey'}}>
          New user?Please Register here <Link to="/Signup">Sign up</Link></p>

    </div>
</div>
  )
}

export default Login
