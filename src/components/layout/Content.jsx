import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from '../../pages/home/Home'
import Headsets from '../../pages/headsets/Headsets'

export default function Content() {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
            <Routes>
                <Route path="/headsets" element={<Headsets/>} />
            </Routes>
        </main>
    )
}