'use client';

import React, { useState } from 'react';

import styles from './articleitem.module.css';

const ArticleItem = (props) => {

    const [imageHeart, setImageHeart] = useState('/heart_open.png');

    const changeImageHeart = () => {
        if(imageHeart === '/heart_open.png') {
            setImageHeart('/heart_close.png');
        } else {
            setImageHeart('/heart_open.png'); 
        }
    }

    return (
        <div className={styles.articleItemContainer}>
            <div className={styles.dateAndIconContainer}>
                <p className={styles.dateContent}>{props.date}</p>
                <img className={styles.heartImageContent} onClick={changeImageHeart} src={imageHeart} alt="Heart Icon" />
            </div>
            <h3 className={styles.titleContent}>{props.title}</h3>
            <p className={styles.descriptionContent}>{props.description}</p>
        </div>
    );
};

export default ArticleItem;
