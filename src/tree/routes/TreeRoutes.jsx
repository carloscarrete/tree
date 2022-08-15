import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { TreePage } from '../pages/TreePage'
import { Footer } from '../ui/Footer/Footer'
import { Navbar } from '../ui/Navbar/Navbar'

export const TreeRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<TreePage />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}
