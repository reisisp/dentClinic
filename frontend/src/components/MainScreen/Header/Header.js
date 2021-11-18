import React from 'react';
import './Header.scss'


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
        <div className='header-container'>
            <header className='header'>
                <a href='/' className='header__logo'>
                    <img src={imgPath('logo/white.svg')} alt='logo' className='logo__img' />
                </a>
                <nav className='nav'>
                    {links.map(link =>
                        <a href={link.path} className='nav__link' key={link.id}>
                            <span className='nav__text'>{link.name}</span>
                        </a>
                    )}
                </nav>
                <div className='header__phone phone'>
                    <img className='phone__img' src={imgPath('customIcons/phone.svg')} alt='phone' />
                    <p className='phone__number'>+7&nbsp;(962)&nbsp;922&nbsp;6115</p>
                </div>
            </header>
        </div>
    );
};
