import React from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';


export const Header = () => {
    const links = [
        { id: 1, path: '/', name: 'Акции' },
        { id: 2, path: '/', name: 'Услуги и цены' },
        { id: 3, path: '/', name: 'Наши врачи' },
        { id: 4, path: '/', name: 'Отзывы' },
        { id: 5, path: '/', name: 'Контакты' }
    ]

    const imgPath = (imgName) => require(`../../../assets/img/${imgName}`).default;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <a href='/' className={styles.header__logo}>
                    <img src={imgPath('logo/white.svg')} alt='logo' className={styles.logo__img} />
                </a>
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
