import About from '@/components/About'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Blogs from '@/components/Blogs'
import Skills from '@/components/Skills'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Varun John | Android Developer</title>
        <meta name="description" content=" I am an Android Developer with 8 years of expertise in the full Software Development Life Cycle. Proficient in all aspects of application development, from proposal and process engineering to requirements, design, testing, deployment, and ongoing support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>     
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/>
    </>
  )
}
