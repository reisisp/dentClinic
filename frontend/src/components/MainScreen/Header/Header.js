import React from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';
import { Logo } from '../../UI/logo/Logo';


export const Header = () => {
    const links = [
        { id: 1, path: '#promo', name: 'Акции' },
        { id: 2, path: '#pricelist', name: 'Услуги и цены' },
        { id: 3, path: '#doctors', name: 'Наши врачи' },
        { id: 4, path: '#comments', name: 'Отзывы' },
        { id: 5, path: '#contacts', name: 'Контакты' }
    ]

    const imgPath = (imgName) => require(`../../../assets/img/${imgName}`).default;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Logo colour='white' />
                <nav className={styles.nav}>
                    {links.map(link =>
                        <a href={link.path} className={styles.nav__link} key={link.id}>
                            <span className={styles.nav__text}>{link.name}</span>
                        </a>
                    )}
                </nav>
                <div className={cn(styles.header__phone, styles.phone)}>
                    <img className={styles.phone__img} src={imgPath('customIcons/phone.svg')} alt='phone' />
                    <p className={styles.phone__number}>+7&nbsp;(962)&nbsp;922&nbsp;6115</p>
                </div>
            </header>
        </div>
    );
}
