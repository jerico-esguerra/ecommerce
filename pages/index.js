import React from 'react';
import { HeroBanner, FooterBanner, Product } from './components';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Top Selling Products</h2>
        <p>Speakers</p>
      </div>

      <div className='products-container'>
        {["Product 1", "Product 2"].map(
          (product) => product
        )}

        <FooterBanner />
      </div>
    </>
  )
}

export default Home