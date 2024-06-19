import React from 'react'
import './Home.css'
import Products from './Products'

const Home = () => {
  return (
    <div className='home'>
      <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      <div className="home_row">
        <Products
          id={"1234564"}
          title="Innovation and Creation and something nonsense data to make title larger and this is to test the width of the cart item"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
        />
        <Products
          id={"1234565"}
          title="boAt Nirvana 751 ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, ASAP Charge, 
          Ambient Sound Mode, Immersive Sound"
          price={3999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ISIssoVFL._SL1500_.jpg"
        />
      </div>

      <div className="home_row">
        <Products
          id={"1234566"}
          title="Mi 108 cm (43 inches) X Series 4K Ultra HD Smart Google TV L43M8-A2IN (Black)"
          price={2699}
          rating={5}
          image="https://m.media-amazon.com/images/I/71L+JnVXFTL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Products
          id={"1234567"}
          title="Apple iPhone 15 (128 GB) - Black"
          price={159999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Products
          id={"1234568"}
          title="Analog-Digital Sports Watch: Chronograph, Dual Time,"
          price={899}
          rating={5}
          image="https://m.media-amazon.com/images/I/713IlKkLY+L._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row">
        <Products
          id={"1234564"}
          title="Inphic Wireless Mouse, Ergonomic Wireless Rechargeable 2.4G Optical Mouse with Nano USB Receiver for Laptop PC MacBook ChromeBook, 6 Buttons, Black"
          price={999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61XfhXi+1kL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>


    </div>
  )
}

export default Home
