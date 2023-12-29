import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AddEmployee from './components/AddEmployee'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <BrowserRouter>
    </BrowserRouter>
      <Navbar/>
      <AddEmployee/>
    </>
  )
}

export default App
