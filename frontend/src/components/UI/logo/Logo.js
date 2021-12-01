import React from 'react';
import primary from '../../../assets/img/logo/blue.svg';
import secondary from '../../../assets/img/logo/white.svg';
import styles from './Logo.module.scss';


export const Logo = ({ ...props }) => {
    let url = primary;
    if (props.colour === 'white') {
        url = secondary;
    }

    return (
        <a href='/' className={styles.logo__link}>
            <img src={url} alt='logo' className={styles.logo} />
        </a>
    );
};
