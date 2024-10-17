import React, {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

export const About = () => {

  useEffect(() => {
    ScrollReveal().reveal('.about1', {
      duration: 2800,
      distance: '100px',
      origin: 'left',
      delay: 300,
    });
  }, []);


  useEffect(() => {
    ScrollReveal().reveal('.about2', {
      duration: 2800,
      distance: '100px',
      origin: 'right',
      interval: 100,
      delay: 300,
    });
  }, []);



  return (
    <div className='w-4/5 p-4 h-screen flex items-top justify-center mx-auto space-x-40'>
      <div className='about1 flex-1 relative flex flex-col items-center'>
        <span style={{ position: 'absolute', height: '75%', width: '75%', marginTop: '50px', marginLeft: '100px', borderRadius: '12px', border: "20px solid #10b981" }}></span>
        <img src='/pictures/image1.jpg' alt="" className='absolute object-cover border-2 border-gray-900 h-3/4 w-3/4 rounded-xl transform translate-x-0 translate-y-0'  />
      </div>
      <div className='about2 flex-1 flex flex-col align-top justify-start translate-y-20'>
        <h1 className='mb-6 text-4xl font-semibold text-emerald-50'>ABOUT ME</h1>
        <p className='overflow-hidden break-words mb-10 mx-auto text-gray-400 mr-20 text-xl leading-9 '>
          I am a software developer with a background in accounting and a strong passion for 
          software development and engineering. I have experience in designing, coding, and maintaining top-class, 
          user-friendly web applications to provide modern solutions to complex problems. I am seeking a software 
          developer role where I can leverage my coding expertise and contribute to innovative projects that will enhance
          your team's capabilities.
        </p>
        <div className=''>
          <button className='border-2 border-emerald-500 text-white text-lg tracking-wide font-semibold font px-16 py-6 rounded-xl hover:bg-gray-900'>MY RESUME</button> 
        </div>
      </div>
    </div>
  );
}
