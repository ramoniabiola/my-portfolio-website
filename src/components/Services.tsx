import { CodeOffRounded,  DesktopMacSharp } from '@mui/icons-material'
import React, {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';


export const Services = () => {

    useEffect(() => {
        ScrollReveal().reveal('.services1', {
            duration: 2800,
            distance: '100px',
            origin: 'bottom',
            delay: 300,
        });
    }, []);



    return (
        <div className='w-4/5 h-auto mt-96 md:mt-32 flex flex-col items-top justify-center mx-auto my-auto'>
            <h1 className='text-center text-4xl font-semibold text-emerald-50 mb-20'>SERVICES</h1>
            <div className='flex items-top flex-col justify-center'>
                <div className='services1 flex flex-col md:flex-row items-top justify-center mt-10 mb-56 space-y-40 md:space-y-0 md:space-x-40'>
                    <div className='md:flex-1 max-w-xl rounded-xl shadow-lg p-6 bg-inherit border-8 border-double border-emerald-500  text-white'
                        style={{ boxShadow: '0 0 50px 40px rgba(52, 211, 153, 0.1)' }}>
                        <div className='flex items-center justify-start mt-4 mb-10'>
                            <span className='p-4 bg-white rounded-full'><CodeOffRounded style={{ color: '#34d399', fontSize: '42px'}} /></span>
                            <h1 className='ml-6 text-4xl font-semibold text-white'>Front-End Development</h1>
                        </div>
                        <p className='break-words mb-4 text-gray-400 text-lg leading-8'>
                            Designing, implementing and maintenance of user interfaces (UI) using technologies like 
                            HTML, CSS, JavaScript, TypeScript, and a framework such as React.
                            Ensuring responsive design for optimal performance across various devices
                            and screen sizes also enhancing user experience (UX) through intuitive design and
                            interaction.
                        </p>
                    </div>
                    <div className='md:flex-1 max-w-xl rounded-xl p-6 bg-inherit border-8 border-emerald-500 border-double text-white'
                        style={{ boxShadow: '0 0 50px 40px rgba(52, 211, 153, 0.1)' }}>
                        <div className='flex items-center justify-start mt-4 mb-10' >
                            <span className='p-4 bg-white rounded-full'><DesktopMacSharp style={{ color: '#34d399', fontSize: '42px'}} /></span>
                            <h1 className='ml-6 text-4xl font-semibold text-white'>Back-End Development</h1>
                        </div>
                        <p className='break-words mb-4 text-gray-400 text-lg leading-8'>
                            Building and maintaining server-side logic using a language like JavaScript(Node.js).
                            Developing and managing databases which includes designing database schemas, 
                            writing queries, and ensuring data integrity and security also integrating 
                            with third-party services and APIs to extend the functionality of the application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
