import React from 'react';
import Image, { StaticImageData } from 'next/image'; 
import style from './CardList.module.scss';

interface CardProps {
  text: string;
  profile: string | StaticImageData;
  authorName: string;
  authorCompany: string;
}

interface CardListProps {
  cards: CardProps[];
  activeIndex: number; 
}

const CardList: React.FC<CardListProps> = ({ cards, activeIndex }) => {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className={`${style.cards} ${index === activeIndex ? style.active : ''}`}>
          <div className={style.cardContent}>
            <p>{card.text}</p>
          </div>
          
          <div className={style.cardImage}>
            <Image
              src={card.profile}
              alt={card.authorName}
              className={style.image}
              width={100}
              height={100}
            />
            <div>
              <span className={style.authorName}>{card.authorName}</span>
              <br />
              <span className={style.authorCompany}>{card.authorCompany}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardList;
