import React from 'react'
import { Navbar } from '../components/Navbar'
import { Intro } from '../components/Intro'
import { About } from '../components/About'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'

export const Home = () => {
    return (
        <div className="w-full h-full overflow-hidden bg-gray-950">
            <Navbar />
            <Intro />
            <About />
            <Portfolio />
            <Services />
        </div>
    )
}
