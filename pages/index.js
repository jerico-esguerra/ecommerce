import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      HeroBanner

      <div className='products-heading'>
        <h2>Top Selling Products</h2>
        <p>Speakers</p>
      </div>

      <div className='products-container'>
        {["Product 1", "Product 2"].map(
          (product) => product
        )}

        Footer
      </div>
    </>
  )
}
