import React from 'react'
import { Navbar } from '../components/Navbar'
import { Intro } from '../components/Intro'

export const Home = () => {
    return (
        <div className="w-screen h-screen overflow-hidden bg-gray-950">
            <Navbar />
            <Intro />
        </div>
    )
}
