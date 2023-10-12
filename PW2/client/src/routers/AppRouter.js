import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from '../Components/layouts/Layout'
import HomePage from '../Paginas/HomePage'
import LoginPage from '../Paginas/LoginPage'
import NotFoundPage from '../Paginas/NotFoundPage'
import PerfilPage from '../Paginas/PerfilPage'
import RegisterPage from '../Paginas/RegisterPage'
import HistorialCompraPage from '../Paginas/HistorialCompraPage'
import ReservacionesCamionPage from '../Paginas/ReservacionesCamionPage'
import ReservacionesVuelosPage from '../Paginas/ReservacionesVuelosPage'
import UsersPage from '../Paginas/admin/UsersPage'
import ProvedoresPage from '../Paginas/admin/ProvedoresPage'


export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route  path='/' element={<HomePage/>}/>
            <Route  path='/login' element={<LoginPage/>}/>
            <Route  path='/register' element={<RegisterPage/>}/>
            <Route  path='/perfil' element={<PerfilPage/>}/>
          
            <Route  path='/historialcompra' element={<HistorialCompraPage/>}/>
            <Route  path='/reservarcamion' element={<ReservacionesCamionPage/>}/>
            <Route  path='/reservarvuelo' element={<ReservacionesVuelosPage/>}/>
            <Route  path='/admin/Users' element={<UsersPage/>}/>
            <Route  path='/admin/Provedores' element={<ProvedoresPage/>}/>
            <Route  path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}
