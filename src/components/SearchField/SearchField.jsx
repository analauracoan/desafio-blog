import React from 'react';

import styles from './searchfield.module.css';

const SearchField = () => {
    return (
        <div className={styles.searchFieldContainer}>
            <input className={styles.searchFieldContent} type='text' id='search' name='search' placeholder='Pesquisar no blog' />
        </div>
    );
};

export default SearchField;