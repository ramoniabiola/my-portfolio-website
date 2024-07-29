import { ArrowForward } from '@mui/icons-material'
import React, {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';


export const Portfolio = () => {

    useEffect(() => {
        ScrollReveal().reveal('.portfolio1', {
          duration: 1500,
          distance: '100px',
          easing: 'ease-out',
          origin: 'bottom',
          reset: true, 
        });
    }, []);

  return (
    <div className='w-4/5 p-4 h-screen flex flex-col items-top justify-center mx-auto my-auto'>
        <h1 className='text-center text-4xl font-semibold text-emerald-50 mb-10'>PORTFOLIO</h1>
        <div className='flex items-top justify-center mt-5'>
            <div className='portfolio1 flex items-top justify-center mt-10 space-x-28'>
                <div className='flex-1 flex flex-col align-top justify-start translate-y-12'>
                    <h1 className='mb-6 text-4xl font-medium text-emerald-500 tracking-normal'>PROJECT 1</h1>
                    <h2 className='mb-6 text-3xl font-bold text-emerald-50'>E-Commerce Web App Design</h2>
                    <p className='break-words mb-4 text-gray-400 text-lg leading-8 '>
                        Designed a fashion e-commerce platform with features for product browsing, product
                        information display, user sign up, user log in and shopping cart. Major technologies 
                        used for developing this project are JavaScript, React.js, style-component for styling, 
                        Redux for global state management, Node.js/Express.js for server-side operations and MongoDB 
                        for user and product data storage and managemnt.
                    </p>
                    <div className='flex items-center justify-start'>
                        <ArrowForward style={{ color: 'white', fontSize: '16px'}} />
                        <span className='ml-2 text-white  tracking-wide text-sm cursor-pointer'>Read more</span>
                    </div>    
                </div>
                <div className='flex-1 relative flex flex-col items-center'>
                    <span style={{ position: 'absolute', marginTop: '50px', marginRight: '100px', height: '100%', width: '100%', borderRadius: '12px', border: "20px solid #10b981" }} ></span>
                    <img src="/pictures/image2.jpg" alt="" className='absolute w-full h-full object-fill rounded-xl transform translate-x-0 translate-y-0' />
                </div>
            </div>
        </div>
        <button className=''></button>
    </div>
  )
}
