import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListTaskComponent from './components/ListTaskComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskComponent from './components/TaskComponent'
import { ToastContainer } from 'react-toastify'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListTaskComponent />}></Route>
          <Route path='/tasks' element={<ListTaskComponent />}></Route>
          <Route path='/add-task' element={<TaskComponent />}></Route>
          <Route path='/update-task/:id' element={<TaskComponent />}></Route>
          <Route path='/register' element={<RegisterComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
