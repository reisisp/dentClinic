import React, { useState } from 'react';
import { Slide } from './Slide';
import styles from './Slider.module.scss';
import cn from 'classnames';


export const Slider = () => {
    const imgPath = (imgName) => require(`../../../assets/img/promo/${imgName}`).default;
    const slides = [
        {
            id: 1,
            promoImg: imgPath('im.png'),
            promoName: '«Smile with me»',
            promoDesc: 'Запишись на профессиональную\nили гигиеническую чистку зубов\nв нашей клинике и получи скидку\n1000 рублей!',
            price: '4600',
            promoPrice: '3600',
            actonName: 'Записаться на чистку'
        },
        {
            id: 2,
            promoImg: imgPath('im2.png'),
            promoName: '«Скидка 10%»',
            promoDesc: 'В клинике до 01.01.2022\nдействует скидка\nна любое терепевтическое\nлечение!',
            price: null,
            promoPrice: '10%',
            actonName: 'Записаться к врачу'
        },
        {
            id: 3,
            promoImg: imgPath('gubka.jpg'),
            promoName: '«Smile with me»',
            promoDesc: 'Запишись на профессиональную\nили гигиеническую чистку зубов\nв нашей клинике и получи скидку\n1000 рублей!',
            price: '4600',
            promoPrice: '3600',
            actonName: 'Записаться на чистку'
        },
        // {
        //     id: 4,
        //     promoImg: imgPath('gubka.jpg'),
        //     promoName: '«Скидка 10%»',
        //     promoDesc: 'В клинике до 01.01.2022\nдействует скидка\nна любое терепевтическое\nлечение!',
        //     price: null,
        //     promoPrice: '10%',
        //     actonName: 'Записаться к врачу'
        // }
    ];

    const length = slides.length;
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(current - 1 < 0 ? length - 1 : current - 1);
    const [next, setNext] = useState(current + 1 > length - 1 ? 0 : current + 1);


    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setPrev(prev === 0 ? length - 1 : prev - 1);
        setNext(next === 0 ? length - 1 : next - 1);
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setPrev(prev === length - 1 ? 0 : prev + 1);
        setNext(next === length - 1 ? 0 : next + 1);
    }

    return (
        <div className={styles.box}>
            <h1 className={styles.slider__name}>Акции</h1>
            <div className={styles.slider}>
                <div className={styles.slider__box}>
                    <Slide slide={slides[prev]} className={cn(styles.slide__prev)} />
                    <Slide slide={slides[current]} className={cn(styles.slide, styles.slide__active)} />
                    <Slide slide={slides[next]} className={cn(styles.slide__next)} />
                </div>
            </div>
            <button
                className={cn(styles.slider__btn, styles.slider__btn_prev)}
                onClick={prevSlide}
            >
                {`<`}
            </button>
            <button
                className={cn(styles.slider__btn, styles.slider__btn_next)}
                onClick={nextSlide}
            >
                {`>`}
            </button>
        </div>
    );
};
