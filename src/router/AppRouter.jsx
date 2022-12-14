import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { checkingAuth } from '../store/auth/thunks'
import { startLoadingNetworks } from '../store/social-networks/thunks'
import { Profile } from '../tree/pages/Profile'
import { TreeRoutes } from '../tree/routes/TreeRoutes'
import { Footer } from '../tree/ui/Footer/Footer'
import { Navbar } from '../tree/ui/Navbar/Navbar'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

  const {uid, displayName: username} = useSelector(selector => selector.auth);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkingAuth());
  }, [dispatch, uid])

  useEffect(() => {
    if(uid){
      dispatch(startLoadingNetworks(username));
    }
  }, [dispatch, uid])
  

  return (
    <>
    <Navbar/>
   <Routes>
        <Route path="/auth/*" element={
          <PublicRoute uid={!!uid}>
            <AuthRoutes/>
          </PublicRoute>
        } />

        <Route path="/usuario/:user" element={<Profile />} />

        <Route path="/*" element={
          <PrivateRoute uid={!!uid}>
            <TreeRoutes />
          </PrivateRoute>
        }/>
        {/* <Route path='/auth/*' element={<AuthRoutes/>} />
        <Route path='/*' element={<TreeRoutes/>} /> */}
    </Routes>
    <div className="footer-end">
    <Footer/>
    </div>
    </>
  )
}
