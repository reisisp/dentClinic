import React, { useState } from 'react';
import { Slide } from './Slide/Slide';
import styles from './Slider.module.scss';
import cn from 'classnames';


export const Slider = () => {
    const imgPath = (imgName) => require(`../../assets/img/promo/${imgName}.png`).default;
    const slides = [
        {
            id: 1,
            promoImg: imgPath('im'),
            promoName: '«Smile with me»',
            promoDesc: 'Запишись на профессиональную\nили гигиеническую чистку зубов\nв нашей клинике и получи скидку\n1000 рублей!',
            price: '4600',
            promoPrice: '3600',
            actonName: 'Записаться на чистку'
        },
        {
            id: 2,
            promoImg: imgPath('im2'),
            promoName: '«Скидка 10%»',
            promoDesc: 'В клинике до 01.01.2022\nдействует скидка\nна любое терепевтическое\nлечение!',
            price: null,
            promoPrice: '10%',
            actonName: 'Записаться к врачу'
        },
        {
            id: 3,
            promoImg: imgPath('im'),
            promoName: '«Smile with me»',
            promoDesc: 'Запишись на профессиональную\nили гигиеническую чистку зубов\nв нашей клинике и получи скидку\n1000 рублей!',
            price: '4600',
            promoPrice: '3600',
            actonName: 'Записаться на чистку'
        },
        {
            id: 4,
            promoImg: imgPath('im2'),
            promoName: '«Скидка 10%»',
            promoDesc: 'В клинике до 01.01.2022\nдействует скидка\nна любое терепевтическое\nлечение!',
            price: null,
            promoPrice: '10%',
            actonName: 'Записаться к врачу'
        }
    ];

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const [img, setImg] = useState(slides[current === length - 1 ? 0 : current + 1].promoImg);


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setImg(slides[current].promoImg);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setImg(slides[current].promoImg)
    }

    return (
        <div className={styles.slider__box}>
            <h1 className={styles.slider__name}>Акции</h1>
            <div className={styles.slider}>
                {slides.map((slide, index) =>
                    <div
                        className={
                            index === current
                                ? cn(styles.slide, styles.slide__active)
                                : (index < current
                                    ? styles.slide__next
                                    : styles.slide__prev
                                        ? (length - current === 1 && index === 0 ? styles.slide__next : styles.slide__prev)
                                        : (length - index === 1 && index - current !== 1 ? styles.slide__prev : styles.slide__next)
                                )}
                        key={index}
                    >
                        {index === current && <Slide slide={slide} img={img} click={nextSlide} />}
                    </div>
                )}
                {console.log(current)}
            </div>
            <button
                className={cn(styles.slider__btn, styles.slider__btn_prev)}
                onClick={prevSlide}>
                {`<`}
            </button>
            <button
                className={cn(styles.slider__btn, styles.slider__btn_next)}
                onClick={nextSlide}>
                {`>`}
            </button>
        </div>
    );
};
