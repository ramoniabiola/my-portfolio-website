import React from 'react'
import { Navbar } from '../components/Navbar'
import { Intro } from '../components/Intro'
import { About } from '../components/About'

export const Home = () => {
    return (
        <div className="w-full h-full overflow-hidden bg-gray-950">
            <Navbar />
            <Intro />
            <About />
        </div>
    )
}
