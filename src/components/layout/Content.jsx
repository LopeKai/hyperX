import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Headsets from '../../pages/headsets/Headsets'
import Earbuds from '../../pages/earbuds/Earbuds'
import Mic from '../../pages/mic/Mic'
import Keabords from '../../pages/keabords/Keabords'
import Mice from '../../pages/mice/Mice'
import MousePads from '../../pages/mousePads/MousePads'
import Power from '../../pages/power/Power'

export default function Content() {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/headsets" element={<Headsets />} />
            </Routes>
            <Routes>
                <Route path="/earbuds" element={<Earbuds />} />
            </Routes>
            <Routes>
                <Route path="/mic" element={<Mic />} />
            </Routes>
            <Routes>
                <Route path="/keabords" element={<Keabords/>} />
            </Routes>
            <Routes>
                <Route path="/mice" element={<Mice />}/>
            </Routes>
            <Routes>
                <Route path="/mouse-pad" element={<MousePads />} />
            </Routes>
            <Routes>
                <Route path="power" element={<Power />}  />
            </Routes>
        </main>
    )
}