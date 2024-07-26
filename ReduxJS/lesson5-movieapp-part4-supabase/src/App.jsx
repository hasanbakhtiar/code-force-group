import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Login from './auth/Login'
import Dashboard from './auth/dashboard/Dashboard'
import AddMovie from './auth/dashboard/AddMovie'
import Footer from './components/Footer'
import EditMovie from './auth/dashboard/EditMovie'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard/addmovie' element={<AddMovie />}></Route>
          <Route path='/dashboard/editmovie/:slug' element={<EditMovie />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App