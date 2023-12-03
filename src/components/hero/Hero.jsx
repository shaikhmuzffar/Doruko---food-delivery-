import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

import heroBanner1 from '../../assets/Images/heroBanners/heroBanner1.png';
import heroBanner2 from '../../assets/Images/heroBanners/heroBanner2.png';
import heroBanner3 from '../../assets/Images/heroBanners/heroBanner3.png';
import heroBanner4 from '../../assets/Images/heroBanners/heroBanner4.png';


export default function Hero() {
  const bannerData = [heroBanner1, heroBanner2, heroBanner3, heroBanner4];
  const [banner, setBanner] = useState(heroBanner1);

  useEffect(() => {
    const randomElementInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * bannerData.length);
      const randomElement = bannerData[randomIndex];
      setBanner(randomElement);
    }, 5000);

    return () => {
      clearInterval(randomElementInterval);
    };
  }, [bannerData]);

  return (
    <Link to='/products' className="heroSection">
      {banner && (
        <div className="hero">
          <img className='heroimg' src={banner} alt="" />
        </div>
      )}
    </Link>
  );
}
