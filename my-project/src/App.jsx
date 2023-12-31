import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />}></Route>
      n dev    <Route path='/' element={<EmployeeList />}></Route>
          <Route path='/employeeList' element={<EmployeeList />}></Route>
          <Route path='/addemployee' element={ <AddEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
