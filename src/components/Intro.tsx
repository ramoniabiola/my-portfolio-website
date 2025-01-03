import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';



export const Intro = () => {

  useEffect(() => {
    ScrollReveal().reveal('.intro1', {
      duration: 2800,
      distance: '100px',
      origin: 'top',
      delay: 300,
    });
  }, []);

  useEffect(() => {
      ScrollReveal().reveal('.intro2', {
        duration: 2800,
        distance: '100px',
        origin: 'bottom',
        interval: 100,
        delay: 300,
      });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal('.intro3', {
      duration: 2800,
      distance: '100px',
      origin: 'right',
      delay: 300,
    });
  }, []);


  return (
    <div className="w-4/5 h-screen flex items-center justify-center mx-auto">
      <div className="intro1 flex-1 flex flex-col items-start  justify-center transform -translate-y-16">
        <h1 className="text-7xl text-emerald-100 font-bold mb-4">Hi,<br /> I'm Abiola,<br /> Software Developer</h1>
        <h3 className="intro2 text-xl text-gray-500 tracking-widest mt-2">Frontend Developer / Backend Developer</h3>
      </div>
      <div className='intro3 hidden md:flex-1 md:flex md:items-center md:justify-center md:transform md:-translate-y-10'>
        <img 
          src="https://th.bing.com/th/id/R.c08f21deff32aa0c12eae4d83bbea4b4?rik=5Sx54e8BIvU7oA&pid=ImgRaw&r=0" 
          alt="Profile" 
          className="w-full h-auto object-cover ml-16 filter-[.75] invert-[.25] sepia-[.25]"  
        />
      </div> 
    </div>
  );
}

export default Intro;
