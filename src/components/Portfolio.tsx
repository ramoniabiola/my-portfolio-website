    import { ArrowForward } from '@mui/icons-material';
    import React, {useEffect} from 'react';
    import ScrollReveal from 'scrollreveal';


    export const Portfolio = () => {

        useEffect(() => {
            ScrollReveal().reveal('.portfolio1', {
                duration: 2800,
                distance: '100px',
                origin: 'bottom',
                delay: 300,
            });
        }, []);
 

        return (
            <div className='w-11/12 md:w-4/5 p-4 mt-20 h-full flex flex-col items-top justify-center mx-auto my-auto'>
                <h1 className='text-center text-4xl font-semibold text-emerald-50 mb-1 md:mb-20'>PORTFOLIO</h1>
                <div className='w-full h-full flex items-top flex-col justify-center'>
                    <div className='portfolio1 flex flex-col md:flex-row items-top justify-center mt-6 md:mt-10 mb-[20rem] md:space-x-40 space-y-[12rem] md:space-y-0'>
                        <div className='md:flex-1 flex flex-col order-1 align-top justify-start translate-y-16'>
                            <h1 className='mb-6 text-4xl font-medium text-emerald-500 tracking-normal'>PROJECT 1</h1>
                            <h2 className='mb-6 text-3xl font-bold text-emerald-50'>E-Commerce Web App Platform</h2>
                            <p className='break-words mb-4 text-gray-400  text-base md:text-lg leading-7 md:leading-9 '>
                                Designed a fashion e-commerce platform with features for product browsing, product
                                information display, user sign up, user log in and shopping cart. Major technologies 
                                used for developing this project are JavaScript, React.js, style-component for styling, 
                                Redux for global state management, Node.js/Express.js for server-side operations and MongoDB 
                                for user and product data storage and management...
                            </p>
                            <div className='flex items-center justify-start'>
                                <ArrowForward style={{ color: 'white', fontSize: '16px'}} />
                                <span className='ml-2 text-white tracking-wide text-sm cursor-pointer'>Read more</span>
                            </div>    
                        </div>
                        <div className='md:flex-1 relative flex flex-col order-2 items-center ml-8 md:ml-20'>
                            <span className="absolute h-[350px] w-full md:h-[30rem] md:w-full mt-[35px] mr-[70px] md:mt-[45px] md:mr-[90px] rounded-xl border-[20px] md:border-[24px] border-solid border-emerald-500  border-y-emerald-700" ></span>
                            <img src={`${process.env.PUBLIC_URL}/images/image2.jpg`} alt="" className='absolute w-full h-[350px] md:h-[30rem] md:w-full  object-fill rounded-xl transform translate-x-0 translate-y-0' />
                        </div>
                    </div>
                    <div className='portfolio1 flex flex-col md:flex-row items-top justify-center mt-10 mb-48 md:space-x-48 space-y-[12rem] md:space-y-0'>
                        <div className='md:flex-1 relative order-2 md:order-1 flex flex-col items-center mt-32 md:mt-0 mr-6 md:mr-0'>
                            <span className="absolute h-[350px] w-full md:h-[30rem] md:w-full mt-[35px] ml-[70px] md:mt-[45px] md:ml-[90px] rounded-xl border-[20px] md:border-[24px] border-solid border-emerald-500  border-y-emerald-700" ></span>
                            <img src={`${process.env.PUBLIC_URL}/images/image3.jpeg`} alt="" className='absolute w-full h-[350px] md:h-[30rem] md:w-full  object-fill rounded-xl transform translate-x-0 translate-y-0' />
                        </div>
                        <div className='md:flex-1 flex flex-col order-1 md:order-2 align-top justify-start translate-y-4'>
                            <h1 className='mb-6 text-4xl font-medium text-emerald-500 tracking-normal'>PROJECT 2</h1>
                            <h2 className='mb-6 text-3xl font-bold text-emerald-50'>Administration Dashboard</h2>
                            <p className='break-words mb-4 text-gray-400 text-base md:text-lg leading-7 md:leading-9'>
                                Designed an administration dashboard for all round management of users and fashion
                                products for the fashion e-commerce platform developed. This web app is restricted to be 
                                accessed only by the administration team using a server-side middleware to ensure only designated
                                admin can log into the web app. The app serves as where products displayed on the 
                                e-commerce platform are being registered and uploaded, tracks the monthly user numbers, tracks the activeness 
                                of each user, monitors user orders, monitors the monthly sales revenue of all product and each individual 
                                product and a whole lot more comprehensive features. MERN is deployed as the technological stack to develop this 
                                project with css for styling, materialUI chart, nivo and recharts for graphical data visualization...
                            </p>
                            <div className='flex items-center justify-start'>
                                <ArrowForward style={{ color: 'white', fontSize: '16px'}} />
                                <span className='ml-2 text-white  tracking-wide text-sm cursor-pointer'>Read more</span>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex md:justify-center'>  
                    <button className='bg-gradient-to-r from-emerald-500 to-emerald-800 px-20 py-6 text-xl text-white tracking-wide font-semibold rounded-md cursor-pointer'>View all</button>
                </div> 
            </div>
        )
    };
