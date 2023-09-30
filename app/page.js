import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Benefits from '../components/benefits/Benefits'
import Services from '../components/dual/Services'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Services alignment="left" />
    </>
  )
}
