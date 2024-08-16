import React from "react";
import Link from 'next/link';
import Image from "next/image";
import ChickenIpImage from '../public/assets/projects/project_1_chicken_ip.jpg'
import NewAppImage from '../public/assets/projects/project_2_news_app.jpg'
import CurrencyConverterImage from '../public/assets/projects/project_3_currency_converter.jpg'

import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div id="projects" className="w-full ">
            <div className="mx-auto max-w-[1240px] px-2 py-16">
                <p className="uppercase tracking-widest text-[#8b542a] text-xl font-semibold"> projects</p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-3 gap-8">

                    <ProjectItem
                        title='Chicken IP App'
                        technology='JavaScript, REST Api'
                        backgroundImg={ChickenIpImage}
                        projectUrl='/ChickenIpApp'
                    />

                    <ProjectItem
                        title='News App'
                        technology='Next.js, REST Api'
                        backgroundImg={NewAppImage}
                        projectUrl='/NewsApp'
                    />

                    <ProjectItem
                        title='Currency Converter App'
                        technology='Next.js, REST Api'
                        backgroundImg={CurrencyConverterImage}
                        projectUrl='/CurrencyConverterApp'
                    />

                </div>
            </div>

        </div>
    )
};
export default Projects;