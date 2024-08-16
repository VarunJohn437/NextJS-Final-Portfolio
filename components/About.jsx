import React from 'react'
import Image from 'next/image'
import about from '../public/assets/my_pic.png'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#8b542a]'>
                        About
                    </p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600 text-justify'> I'm a Software Engineer with a strong background in developing responsive applications for both mobile and web platforms. My journey as a developer began before graduation and deepened when I created my first mobile application. What started as a simple project quickly evolved into a passion for development, fueled by the intricacies of programming.  </p>
                    <p className='py-2 text-gray-600 text-justify'> I specialize in building versatile, responsive front-end UI applications that seamlessly connect with APIs and backend technologies. I'm passionate about learning new technologies and believe that there are multiple ways to achieve a task. While I have a strong proficiency in building front-end applications using HTML, CSS, JavaScript, React, NextJS, Headless CMS, and databases, I am also a quick learner who can adapt to new tech stacks as needed. I believe that being a great developer is not about sticking to a single language or tool, but about choosing the best one for the job. </p>
                    <a className='py-2 text-gray-600 underline cursor-pointer'
                            href='https://github.com/varunjohn'
                            target='_blank'
                            rel='noreferrer'
                        >Check Out Some Of My Latest Projects</a>
                </div>
                <div className='w-full h-auto m-auto shadow-gray-600 shadow-xl rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={about} className='rounded-xl' alt='' />
                </div>
            </div>
        </div>
    )
}

export default About