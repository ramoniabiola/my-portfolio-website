import { EmailOutlined, Facebook, GitHub, LinkedIn, LocationOnOutlined, PhoneCallbackOutlined, X } from '@mui/icons-material';
import React, {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';



export const Contact = () => {

    useEffect(() => {
        ScrollReveal().reveal('.contact1', {
            duration: 800,
            distance: '100px',
            easing: 'ease-in-out',
            delay: 300,
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal('.contact2', {
            duration: 1600,
            distance: '100px',
            easing: 'ease-in-out',
            delay: 300,
            interval: 100,
        });
    }, []);

    return (
        <div className='relative w-full h-screen flex flex-col items-center justify-start bg-gradient-to-l from-emerald-300 to-emerald-950 rounded-tl-[12rem] rounded-tr-[12rem] overflow-y-visible'>
            <div className='absolute w-1/4 h-1/2 opacity-90 bg-inherit rounded-full -left-40 -top-40 shadow-2xl'></div>
            <div className='absolute w-1/4 h-1/2 opacity-90 bg-inherit rounded-full -right-40 -top-40 shadow-2xl'></div>
            <div className='absolute w-1/4 h-1/2 opacity-90 bg-inherit rounded-full -left-10 top-10 shadow-2xl'></div>
            <div className='absolute w-1/4 h-1/2 opacity-90 bg-inherit rounded-full -right-10 top-10 shadow-2xl'></div>
            <div className='w-full flex flex-col items-center justify-start'>
                <h1 className='text-center text-4xl font-semibold text-emerald-50 mb-24 mt-10'>CONTACT</h1>
                <div className='contact1 w-4/5 flex items-start justify-center mb-40 mt-10 space-x-96'>
                    <div className='flex-1 flex flex-col items-start justify-center'>
                        <h1 className='text-2xl text-start font-bold text-emerald-50 mb-4'>Drop Me a Message</h1>
                        <p className='break-words mb-8 text-gray-300 text-lg leading-8 max-w-lg'>
                            We'd love to hear from you! Whether you have a question, 
                            a suggestion, or simply want to share your thoughts. 
                        </p>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex items-center'>
                                <span className='p-4 bg-gradient-to-r from-emerald-500 to-emerald-900 shadow-2xl opacity-90 rounded-xl mr-6'><PhoneCallbackOutlined style={{ color: 'white'}} /></span>
                                <span className='text-gray-300 text-lg'>+234 8080 117 388</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='p-4 bg-gradient-to-r from-emerald-500 to-emerald-900 shadow-2xl opacity-90 rounded-xl mr-6'><EmailOutlined style={{ color: 'white'}}  /></span>
                                <span className='text-gray-300 text-lg'>ramoniabiola61@gmail.com</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='p-4 bg-gradient-to-r from-emerald-500 to-emerald-900 shadow-2xl opacity-90 rounded-xl mr-6'><LocationOnOutlined style={{ color: 'white'}} /></span>
                                <span className='text-gray-300 text-lg'>14, Old Rail-way Road, Obada, Abeokuta, Ogun State.</span>
                            </div>  
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col items-center justify-center'>
                        <form className='flex flex-col items-center justify-center w-full h-full space-y-3 p-8 bg-gradient-to-r from-emerald-300 to-emerald-500 shadow-xl opacity-95 rounded-2xl'>
                            <input className='bg-gray-950 p-4 w-full rounded-[0.60rem] text-lg text-white' type="text" placeholder='Name' />
                            <input className='bg-gray-950 p-4 w-full rounded-[0.60rem] text-lg text-white' type="text" placeholder='Email' />
                            <textarea className='bg-gray-950 p-3 h-28 w-full rounded-[0.60rem] text-lg text-white' name="" id="" placeholder='Message' ></textarea>
                            <button className='bg-gray-950 p-4 w-1/2 rounded-[0.60rem] text-xl font-bold text-white hover:bg-gray-900'>Send</button>
                        </form>
                    </div>
                </div>
                <div className='contact2 w-full flex flex-col items-center justify-center space-y-6'>
                    <hr className='border-gray-400 border-1 w-4/5' />
                    <div className='w-4/5 flex items-center justify-between'>
                        <h1 className="text-gray-200 text-4xl font-bold font-mono cursor-pointer">
                          Ramoni
                        </h1>
                        <h2 className='text-white'>2024 - Incredible Tech, All right reserved</h2>
                        <div className='flex space-x-5 cursor-pointer'>
                            <span className='p-4 bg-gradient-to-r from-emerald-300 to-emerald-700 shadow-2xl opacity-90 rounded-xl'><Facebook style={{ color: 'white'}} /></span>
                            <span className='p-4 bg-gradient-to-r from-emerald-300 to-emerald-700 shadow-2xl opacity-90 rounded-xl'><GitHub style={{ color: 'white'}} /></span>
                            <span className='p-4 bg-gradient-to-r from-emerald-300 to-emerald-700 shadow-2xl opacity-90 rounded-xl'><LinkedIn style={{ color: 'white'}} /></span>
                            <span className='p-4 bg-gradient-to-r from-emerald-300 to-emerald-700 shadow-2xl opacity-90 rounded-xl'><X style={{ color: 'white'}} /></span>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
