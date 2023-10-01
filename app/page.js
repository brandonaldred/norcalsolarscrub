import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Benefits from '../components/benefits/Benefits'
import Solution from '../components/solution/Solution'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Solution alignment="left" />
    </>
  )
}
