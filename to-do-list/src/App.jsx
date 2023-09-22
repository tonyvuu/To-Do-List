//HOOKS MUST BE IMPORTED TO USE THEM
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import todoImage from './todolist.png';


function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('blue');

  const handleColorChange = () =>{
    if(color === 'blue'){
      setColor('red')
    }
    if(color === 'red'){
      setColor('blue')
    }
  }

  return (
   <div className='header-logo'>
    <h1>TaskQuest <img src={todoImage} alt='todolistguy' className='todolist-icon' /> </h1>
   </div>
  )
}

export default App