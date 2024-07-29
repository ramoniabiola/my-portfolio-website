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
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal('.portfolio2', {
          duration: 1500,
          distance: '100px',
          easing: 'ease-out',
          origin: 'bottom', 
        });
    }, []);

  return (
    <div className='w-4/5 h-auto flex flex-col items-top justify-center mx-auto my-auto'>
        <h1 className='text-center text-4xl font-semibold text-emerald-50 mb-20'>PORTFOLIO</h1>
        <div className='flex items-top flex-col justify-center '>
            <div className='portfolio1 flex items-top justify-center mt-10 mb-56 space-x-40'>
                <div className='flex-1 flex flex-col align-top justify-start translate-y-8'>
                    <h1 className='mb-6 text-4xl font-medium text-emerald-500 tracking-normal'>PROJECT 1</h1>
                    <h2 className='mb-6 text-3xl font-bold text-emerald-50'>E-Commerce Web App Platform</h2>
                    <p className='break-words mb-4 text-gray-400 text-lg leading-8 '>
                        Designed a fashion e-commerce platform with features for product browsing, product
                        information display, user sign up, user log in and shopping cart. Major technologies 
                        used for developing this project are JavaScript, React.js, style-component for styling, 
                        Redux for global state management, Node.js/Express.js for server-side operations and MongoDB 
                        for user and product data storage and management.
                    </p>
                    <div className='flex items-center justify-start'>
                        <ArrowForward style={{ color: 'white', fontSize: '16px'}} />
                        <span className='ml-2 text-white  tracking-wide text-sm cursor-pointer'>Read more</span>
                    </div>    
                </div>
                <div className='flex-1 relative flex flex-col items-center ml-20'>
                    <span style={{ position: 'absolute', marginTop: '40px', marginRight: '80px', height: '100%', width: '100%', borderRadius: '12px', border: "20px solid #10b981" }} ></span>
                    <img src="/pictures/image2.jpg" alt="" className='absolute w-full h-full object-fill rounded-xl transform translate-x-0 translate-y-0' />
                </div>
            </div>
            <div className='portfolio2 flex items-top justify-center mt-10 mb-48 space-x-40'>
                <div className='flex-1 relative flex flex-col items-center ml-10'>
                    <span style={{ position: 'absolute', marginTop: '40px', marginRight: '80px', height: '100%', width: '100%', borderRadius: '12px', border: "20px solid #10b981" }} ></span>
                    <img src="/pictures/image3.jpg" alt="" className='absolute w-full h-full object-center rounded-xl transform translate-x-0 translate-y-0' />
                </div>
                <div className='flex-1 flex flex-col align-top justify-start translate-y-8'>
                   <h1 className='mb-6 text-4xl font-medium text-emerald-500 tracking-normal'>PROJECT 2</h1>
                   <h2 className='mb-6 text-3xl font-bold text-emerald-50'>Administration Dashboard</h2>
                   <p className='break-words mb-4 text-gray-400 text-lg leading-8 '>
                       Designed an administration dashboard for all round management of users and fashion
                       products for the fashion e-commerce platform developed. This web app is restricted to be 
                       accessed only by the administration team using a server-side middleware to ensure only desgnated
                       admin can log into the web app. The app serves as where products displayed on the 
                       e-commerce platform are being registered and uploaded, tracks the monthly user numbers, tracks the activeness 
                       of each user, monitors user orders, monitors the monthly sales revenue of all product and each individual 
                       product and a whole lot more comprehensive features. MERN is deployed as the technology stack to develop this 
                       project with css for styling, materialUI chart, nivo and recharts for data graphical visualization.
                   </p>
                   <div className='flex items-center justify-start'>
                       <ArrowForward style={{ color: 'white', fontSize: '16px'}} />
                       <span className='ml-2 text-white  tracking-wide text-sm cursor-pointer'>Read more</span>
                   </div>    
               </div>
            </div>
        </div>
        <div className='flex justify-center mb-20'>
            <button className=' bg-gradient-to-r from-emerald-500 to-emerald-800 px-20 py-6 text-xl text-white tracking-wide font-semibold rounded-md'>View all</button>
        </div>
    </div>
  )
}
