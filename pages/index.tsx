import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Header from '../components/Header'
import Positions from '../components/Positions'

import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Position1 from "../components/Position1";

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Krishnaraj S</title>
        <meta name="description" content="Krishnaraj S" />
        <link rel="icon" href="/images/krishhh1.jpeg" />
      </Head>
      <div className='max-w-screen-lg mx-auto pt-20 px-5'  >
        <Header />
        <Contacts />
        <About />
        <Skills />
        <Positions />
        <Position1/>
        <Projects/>
        <Footer />
      </div>
    </div>
  )
}
