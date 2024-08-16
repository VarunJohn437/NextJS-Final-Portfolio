import Image from 'next/image'
import React from 'react'
import Android from '../public/assets/skills/android.png';
import Ios from '../public/assets/skills/ios.png';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import PHP from '../public/assets/skills/php.png';
import ReactImage from '../public/assets/skills/react.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Tailwind from '../public/assets/skills/tailwind.png';
import mysql from '../public/assets/skills/mysql.png';  
import Github from '../public/assets/skills/github.png';
import Firebase from '../public/assets/skills/firebase.png';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
           <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#8b542a]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        {/* columns */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
         {/* row */}
          
         <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Android} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Android</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Ios} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>iOS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>


          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={PHP} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PHP</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImage} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 bg-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={mysql} width='48px' height='48px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MySQL</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
        </div>
    )
}

export default Skills