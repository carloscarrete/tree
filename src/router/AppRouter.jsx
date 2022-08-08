import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { TreeRoutes } from '../tree/routes/TreeRoutes'
import { Footer } from '../tree/ui/Footer/Footer'
import { Navbar } from '../tree/ui/Navbar/Navbar'

export const AppRouter = () => {
  return (
    <>
    <Navbar/>
   <Routes>
        <Route path='/auth/*' element={<AuthRoutes/>} />
        <Route path='/*' element={<TreeRoutes/>} />
    </Routes>
    <Footer/>
    </>
  )
}
