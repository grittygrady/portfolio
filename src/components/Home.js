import React from 'react';
import image from '../img/pixel-city.png';

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt='pixel art of a city'
        className='absolute object-cover w-full height-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-lg lg:text-3xl text-purple-100 font-bold cursive leading-none lg:leading-snug home-name'>
          CHrIs GraDy
        </h1>
      </section>
    </main>
  );
};

export default Home;
