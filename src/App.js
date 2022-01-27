import ListOfCharacters from "./components/ListOfCharacters"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Hola from "./components/Hola"
import OneCharacter from "./components/OneCharacter"
import Navbar from "./components/Navbar"
import Home from "./components/Home"

export const App = () => {

  return (
    <Router>
      <Navbar/>
    <div>
      <Link to='/'>
        <h1>Rick And Morty</h1>
      </Link>
      <Link to='/Hola'>
          <h1>Hola</h1>
          </Link> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='characters' element={<ListOfCharacters/>}></Route>
        <Route path ='/Hola' element={<Hola/>}></Route>
        <Route path='/characters/:charId' element={<OneCharacter />} />
      </Routes>
     </div>
    </Router>
  )
}