import React from 'react'
import { Navbar } from '../components/Navbar'
import { Intro } from '../components/Intro'
import { About } from '../components/About'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { Experience } from '../components/Experience'
import { Contact } from '../components/Contact'

export const Home = () => {
    return (
        <div className="w-full h-full overflow-hidden bg-gray-950 scroll-smooth">
            <Navbar />
            <Intro />
            <About />
            <Portfolio />
            <Services />
            <Experience />
            <Contact />
        </div>
    )
}
