import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { TreeApp } from '../TreeApp'

export const AppRouter = () => {
  return (
   <Routes>
        <Route path='/auth/*' element={<AuthRoutes/>} />
        <Route path='/*' element={<TreeApp/>} />
    </Routes>
  )
}
