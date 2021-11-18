import React from "react";
import { GMap } from "./Map/GMap";
import styles from './Contacts.module.scss'


export const Contacts = () => {
    // const imgPath = (imgName) => require(`../../assets/img/customIcons/${imgName}`).default;


    return (
        <div className={styles.box}>
            <div className={styles.contacts}>
                <h1 className={styles.contacts__heading}>Контакты</h1>
                <div className={styles.contacts__elems}>
                    <div className={styles.contacts__elem}>
                        <svg className={styles.contacts__svg} xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.992 4C7.576 4 4 7.584 4 12C4 16.416 7.576 20 11.992 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 11.992 4ZM12 18.4C8.464 18.4 5.6 15.536 5.6 12C5.6 8.464 8.464 5.6 12 5.6C15.536 5.6 18.4 8.464 18.4 12C18.4 15.536 15.536 18.4 12 18.4Z" />
                            <path d="M12 8H11V12.5902L14.5 15L15 14.059L12 12.0164V8Z" />
                        </svg>
                        <p className={styles.contacts__text}>9:00 - 21:00 <br />без выходных</p>
                    </div>
                    <div className={styles.contacts__elem}>
                        <svg className={styles.contacts__svg} xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.12 15.0044C18.0267 15.0044 16.9689 14.8267 15.9822 14.5067C15.6711 14.4 15.3244 14.48 15.0844 14.72L13.6889 16.4711C11.1733 15.2711 8.81778 13.0044 7.56444 10.4L9.29778 8.92444C9.53778 8.67556 9.60889 8.32889 9.51111 8.01778C9.18222 7.03111 9.01333 5.97333 9.01333 4.88C9.01333 4.4 8.61333 4 8.13333 4H5.05778C4.57778 4 4 4.21333 4 4.88C4 13.1378 10.8711 20 19.12 20C19.7511 20 20 19.44 20 18.9511V15.8844C20 15.4044 19.6 15.0044 19.12 15.0044Z" />
                        </svg>
                        <p className={styles.contacts__text}>+7 (962) 922 6115</p>
                    </div>
                    <div className={styles.contacts__elem}>
                        <svg className={styles.contacts__svg} xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4C8.68286 4 6 6.504 6 9.6C6 13.8 12 20 12 20C12 20 18 13.8 18 9.6C18 6.504 15.3171 4 12 4ZM12 11.6C10.8171 11.6 9.85714 10.704 9.85714 9.6C9.85714 8.496 10.8171 7.6 12 7.6C13.1829 7.6 14.1429 8.496 14.1429 9.6C14.1429 10.704 13.1829 11.6 12 11.6Z" />
                        </svg>
                        <p className={styles.contacts__text}>м.Беговая<br />ул. 3-й Хорошёвский проезд, д.4</p>
                    </div>
                </div>
            </div>
            <div className={styles.map}>
                <GMap />
            </div>
        </div>
    )
}