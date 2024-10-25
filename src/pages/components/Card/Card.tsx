import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Components 
import style from './Card.module.scss';
import Button from '../Button/Button';
import CardList from './CardList';

// Images 
import profile from '../../../../images/jpg/profile.jpeg'
import profile_1 from '../../../../images/jpg/profile 1.jpeg'
import profile_2 from '../../../../images/jpg/profile 2.jpeg'
import profile_3 from '../../../../images/jpg/profile 3.jpeg'

// Icons
import iconLeft from '../../../../images/svg/icon_left.svg'
import iconRight from '../../../../images/svg/icon_right.svg'

export default function Card() {
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);
  const [activeIndex, setActiveIndex] = useState(0);

  // Insert users 
  const cardData = [
    {
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      profile: profile_1,
      authorName: "Jane Cooper",
      authorCompany: "10KWh"
    },
    {
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      profile: profile_3,
      authorName: "Ralph Edwards",
      authorCompany: "32KWh"
    },
    {
      text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      profile: profile,
      authorName: "Courtney Henry",
      authorCompany: "6KWh"
    },
    {
      text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      profile: profile_2,
      authorName: "Cameron Williamson",
      authorCompany: "12KWh"
    },
    {
      text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      profile: profile_2,
      authorName: "Cameron Williamson",
      authorCompany: "12KWh"
    },
  ];

  // Button Next Slider
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  // Button Previous Slider
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  // Get windows width
  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Slider mobile style 
  const sliderStyle = {
    transform: screenWidth && screenWidth <= 768 ? `translateX(-${activeIndex * 100}%)` : '',
  };

  return (
    <section className={style.card}>
      <div className={style.hero}>
        <div className='flex flex-col gap-5'>
          <h2>Join other Sun harvesters</h2>
          <h1>Make something awesome</h1>
          <p>Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique <br /> condimentum congue fusce nunc, donec magnis commodo.</p>
        </div>

        <div className='flex flex-col gap-5'>
          <Button 
            text="Request a Quote" 
            width="auto" 
            color="yellow" 
           />
        </div>
      </div>

      {/* Slider */}
      <div className={`${style.carrousel} ${activeIndex === cardData.length - 1 ? style.alignEnd : ''}`}>
        <div className={style.slider} style={sliderStyle}>
          <CardList cards={cardData} activeIndex={activeIndex} />
        </div>

        <div className={style.sliderDots}>
          <ul>
            {cardData.map((_, index) => (
              <li key={index} className={index === activeIndex ? style.active : ''}></li>
            ))}
          </ul>
        </div>

        {/* Slider Buttons  */}
        <div className={style.buttonContainer}>
          <button className={`${style.circleButton} ${style.left}`} onClick={handlePrev}>
            <span>
              <Image src={iconLeft} alt="Icon Left" />
            </span>
          </button>

          <button className={`${style.circleButton} ${style.right}`} onClick={handleNext}>
            <span>
              <Image src={iconRight} alt="Icon Right" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}