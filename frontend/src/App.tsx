
import './App.css'
import Login from './pages/auth/Login'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/auth/SignUp'
import PageNotFound from './pages/errors/NotFound'
import { ToastContainer } from 'react-toastify'
import Products from './pages/admin/products'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="" element = {< Login />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<PageNotFound/>} />

      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
