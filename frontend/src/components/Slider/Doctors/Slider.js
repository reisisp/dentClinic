import React, { useState } from 'react';
import { Slide } from './Slide';
import right_arr from '../../../assets/img/customIcons/arr-right.svg';
import left_arr from '../../../assets/img/customIcons/arr-left.svg';
import styles from './Slider.module.scss';
// import cn from 'classnames';


export const Slider = ({...props}) => {
    const imgPath = (imgName) => require(`../../../assets/img/doctors/${imgName}`).default;
    const slides = [
        {
            id: 0,
            name: 'Гардян\nКрестина Александровна',
            imgUrl: imgPath('2.png'),
            content: 'Врач стоматолог,\nглавный врач клиники'
        },
        {
            id: 1,
            name: 'Татевосян\nМаксим Артурович',
            imgUrl: imgPath('1.png'),
            content: 'Врач-стоматолог,\nчелюстно-лицевой хирург'
        },
        {
            id: 2,
            name: 'Дятлов\nИлья Геннадиевич',
            imgUrl: imgPath('3.png'),
            content: 'Врач-стоматолог общей практики,\nврач-стоматолог ортопед'
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
            <h1 className={styles.heading}>Наши врачи</h1>
            <div className={styles.slider}>
                <div className={styles.slider__cards}>
                    <Slide slide={slides[prev]} />
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
