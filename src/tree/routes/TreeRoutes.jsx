import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SocialNetworks } from '../pages/SocialNetworks'
import { TreePage } from '../pages/TreePage'
import { Footer } from '../ui/Footer/Footer'
import { Navbar } from '../ui/Navbar/Navbar'

export const TreeRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<TreePage />} />
                <Route path='/usuario/:user' element={<SocialNetworks />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}
