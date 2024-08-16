import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
      <div className='mx-width[1240px] items-center justify-center w-full h-full mx-auto p-2 flex '>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-500'>let&#39; Design and Construct something Uniquely great</p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#8b542a]'> Varun John</span>
          </h1>
          <h1 className='py-2 text-gray-700'>An Android Application Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
              I am an Android Developer with 8 years of expertise in the full Software Development Life Cycle. Proficient in all aspects of application development, from proposal and process engineering to requirements, design, testing, deployment, and ongoing support.
          </p>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/varunjohn1990'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-50'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/varunjohn'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-50'>
                <FaGithub />
              </div>
            </a>

            <a
              href='mailto:varunjohn1990@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-50'>
                <AiOutlineMail />
              </div>
            </a>
            <a
              href='mailto:varunjohn1990@gmail.com'
              target='_blank'
              rel='noreferrer'
            >             
             <div className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-50'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main