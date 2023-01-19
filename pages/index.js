import React from 'react';
import { HeroBanner, FooterBanner, Product } from '../components';
import { client } from '../lib/client';

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />

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

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home