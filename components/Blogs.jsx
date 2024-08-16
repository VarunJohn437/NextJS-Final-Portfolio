import React from 'react'
import Image from 'next/image'
import Blog1 from '../public/assets/blogs/blog1.jpg'
import Blog2 from '../public/assets/blogs/blog2.jpg'
import Blog3 from '../public/assets/blogs/blog3.jpg'

const Blogs = () => {
    return (
        <div id='blogs' className='w-full mx-auto max-w-[1240px] px-2 py-16'>
            <div className='w-full items-center py-16'>

                <p className="uppercase tracking-widest text-[#8b542a] text-xl font-semibold">Blogs</p>

                <div className='max-w-[1240px] m-auto md:grid grid-cols-3 py-4 gap-8'>
                    <div className='col-span-2'>
                        <h2 className='py-4'>“Mastering Data Structures and Algorithms: A Comprehensive Guide”</h2>
                        <p className='py-2 text-gray-600 text-justify'>
                            Data Structures and Algorithms (DSA) form the backbone of computer science and programming. Whether you’re a beginner aiming to understand the basics or an experienced developer looking to sharpen your skills, mastering DSA is crucial for efficient problem-solving and coding interviews. In this blog, we’ll explore three main sections: the fundamentals of DSA, common data structures, and essential algorithms. Each section is broken down into actionable and digestible subsections to help you build a strong foundation.
                        </p>
                        <a className='py-2 text-gray-600 underline cursor-pointer'
                            href='https://medium.com/@ankushrana767/mastering-data-structures-and-algorithms-a-comprehensive-guide-f701249378d9'
                            target='_blank'
                            rel='noreferrer'
                        >Checkout full blog on Medium</a>
                    </div>
                    <div className='w-full h-auto m-auto shadow-gray-600 shadow-md items-center justify-center rounded-xl hover:scale-105 ease-in duration-300'>
                        <Image src={Blog1} className='rounded-xl' alt='' />
                    </div>
                </div>

                <div className='max-w-[1240px] m-auto md:grid grid-cols-3 py-4 gap-8'>
                    <div className='w-full h-auto m-auto shadow-gray-600 shadow-md items-center justify-center rounded-xl hover:scale-105 ease-in duration-300'>
                        <Image src={Blog2} className='rounded-xl' alt='' />
                    </div>
                    <div className='col-span-2'>
                        <h2 className='py-4'>“Unlocking the Power of React.js: A Deep Dive into Components, State Management, and Ecosystem”</h2>
                        <p className='py-2 text-gray-600 text-justify'>
                            React.js is a powerful JavaScript library developed by Facebook, primarily for building user interfaces, especially for single-page applications. It enables developers to create reusable UI components, manage the view layer, and handle state management efficiently. React.js has gained immense popularity in the web development community due to its component-based architecture, declarative nature, and performance optimizations. In this comprehensive explanation, we will explore three main points related to React.js: Component-Based Architecture, State Management in React, and React’s Ecosystem and Community Support. Each of these main points will be further elaborated with three subpoints.
                        </p>
                        <a className='py-2 text-gray-600 underline cursor-pointer'
                            href='https://medium.com/@ankushrana767/unlocking-the-power-of-react-js-a-deep-dive-into-components-state-management-and-ecosystem-a44af29cac51'
                            target='_blank'
                            rel='noreferrer'
                        >Checkout full blog on Medium</a>
                    </div>
                </div>

                <div className='max-w-[1240px] m-auto md:grid grid-cols-3 py-4 gap-8'>
                    <div className='col-span-2'>
                        <h2 className='py-4'>“Mastering Machine Learning and AI: A Comprehensive Guide”</h2>
                        <p className='py-2 text-gray-600 text-justify'>
                            Machine Learning (ML) and Artificial Intelligence (AI) are rapidly transforming industries, from healthcare to finance, and reshaping the way we live and work. These technologies enable machines to learn from data, make decisions, and even perform tasks that were once thought to require human intelligence. In this blog, we will explore the fundamentals of machine learning and AI, focusing on three main topics: The Basics of Machine Learning and AI, Key Techniques and Algorithms in Machine Learning, and Real-World Applications and Challenges. Each main topic will be further divided into three subtopics, providing a deep dive into these revolutionary fields.
                        </p>
                        <a className='py-2 text-gray-600 underline cursor-pointer'
                            href='https://medium.com/@ankushrana767/mastering-machine-learning-and-ai-a-comprehensive-guide-36393a8aef9f'
                            target='_blank'
                            rel='noreferrer'
                        >Checkout full blog on Medium</a>
                    </div>
                    <div className='w-full h-auto m-auto shadow-gray-600 shadow-md items-center justify-center rounded-xl hover:scale-105 ease-in duration-300'>
                        <Image src={Blog3} className='rounded-xl' alt='' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Blogs