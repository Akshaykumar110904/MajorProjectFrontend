import React from 'react'
import { Navigate,Routes,Route } from 'react-router-dom'
import Index from "../pages/Index"
const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index></Index>}></Route>
                <Route path="*" element={<Navigate to="/" replace/>}></Route>
            </Routes>
        </>
    )
}

export default MainRouter