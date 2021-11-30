import React, { useState } from 'react';
import { Slide } from './Slide';
import right_arr from '../../../assets/img/customIcons/arr-right.svg';
import left_arr from '../../../assets/img/customIcons/arr-left.svg';
import styles from './Slider.module.scss';
// import cn from 'classnames';


export const Slider = ({ ...props }) => {
    const imgPath = (imgName) => require(`../../../assets/img/comments/${imgName}`).default;
    const slides = [
        {
            id: 1,
            date: '29.07.2021',
            name: 'Анна',
            imgUrl: imgPath('1.png'),
            content: 'Давно хотела сделать отбеливание зубов, не решалась,но потом посмотрела, почитала отзывы о клинике, посмотрела на уровень заведения и врачей, вызвало доверие. Чтобы сделать отбеливание, пришлось сначала сделать полную чистку зубов, долго, но очень тщательно,так мне ещё никто не делал. Понравилась врач стоматолог Гардян Крестина Александровна. Заметила кариес, предложила сходить до отбеливания к терапевту.',
        },
        {
            id: 2,
            date: '15.03.2021',
            name: 'Иван',
            imgUrl: imgPath('2.png'),
            content: 'Давно хотела сделать отбеливание зубов, не решалась,но потом посмотрела, почитала отзывы о клинике, посмотрела на уровень заведения и врачей, вызвало доверие. Чтобы сделать отбеливание, пришлось сначала сделать полную чистку зубов, долго, но очень тщательно,так мне ещё никто не делал. Понравилась врач стоматолог Гардян Крестина Александровна. Заметила кариес, предложила сходить до отбеливания к терапевту.',
        },
        {
            id: 3,
            date: '18.05.2021',
            name: 'Сергей',
            imgUrl: imgPath('3.png'),
            content: 'Давно хотела сделать отбеливание зубов, не решалась,но потом посмотрела, почитала отзывы о клинике, посмотрела на уровень заведения и врачей, вызвало доверие. Чтобы сделать отбеливание, пришлось сначала сделать полную чистку зубов, долго, но очень тщательно,так мне ещё никто не делал. Понравилась врач стоматолог Гардян Крестина Александровна. Заметила кариес, предложила сходить до отбеливания к терапевту.',
        }
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
        <div {...props} className={styles.box}>
            <h1 className={styles.heading}>Отзывы</h1>
            <div className={styles.slider}>
                <div className={styles.slider__cards}>
                    <Slide slide={slides[current]} />
                    <Slide slide={slides[next]} />
                </div>
                <div>
                    <button
                        className={styles.btn}
                        onClick={prevSlide}
                    >
                        <img src={left_arr} alt="left" />
                    </button>
                    <button
                        className={styles.btn}
                        onClick={nextSlide}
                    >
                        <img src={right_arr} alt="right" />
                    </button>
                </div>
            </div>
        </div>
    );
};
