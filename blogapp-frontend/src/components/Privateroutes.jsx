import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Privateroutes = () => {

const token=localStorage.getItem('logintoken');
let verifyUser=false;   //boolean variable
if(token){
    verifyUser=true;
}

  return (
    verifyUser?<Outlet/>:<Navigate to={'/'}/>
  )
}

export default Privateroutes
