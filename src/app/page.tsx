import Image from 'next/image'
import Trips from './components/trips'

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <>
    <h1>Hello</h1>
    <Trips/>
    </>
  )
}
