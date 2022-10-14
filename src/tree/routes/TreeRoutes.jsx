import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Profile } from '../pages/Profile'
import { SocialNetworks } from '../pages/SocialNetworks'
import { TreePage } from '../pages/TreePage'

export const TreeRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<TreePage />} />
                <Route path='/usuario/:user' element={<Profile />} />
                <Route path='/redes' element={<SocialNetworks />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}
