import React from 'react';

const Home = () => {
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

export default Home