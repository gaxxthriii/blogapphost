import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Blog from './components/Blog'
import Addblog from './components/Addblog'
import Navbar from './components/Navbar'
import Privateroutes from './components/Privateroutes'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        {/* <Route path='/Navbar' element={<Navbar/>}></Route> */}
        {/* <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Addblog' element={<Addblog/>}></Route> */}


        <Route element={<Privateroutes/>}>

        <Route path='/Blog' element={<Main child={<Blog/>}/>}></Route>
        <Route path='/Addblog' element={<Main child={<Addblog/>}/>}></Route>
        </Route>
        
      </Routes>
      </div>
  )
}

export default App
