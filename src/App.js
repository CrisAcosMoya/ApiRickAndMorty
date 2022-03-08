import ListOfCharacters from "./components/ListOfCharacters"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from './/logo.png'
import OneCharacter from "./components/OneCharacter"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import './/index.css'

export const App = () => {

  return (
    <Router>
      <Navbar/>
    <div className='container'>
      <Link to='/'>
      <img src={logo}  alt='Logo de Rick And Morty' />
      </Link>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='characters' element={<ListOfCharacters/>}></Route>
        
        <Route path='/characters/:charId' element={<OneCharacter />} />
      </Routes>
     </div>
    </Router>
  )
}