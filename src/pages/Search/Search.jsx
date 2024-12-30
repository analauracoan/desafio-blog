import ArticleItem from '@/src/components/ArticleItem/ArticleItem';
import SearchField from '@/src/components/SearchField/SearchField';
import React from 'react';

import styles from './search.module.css';

const Search = () => {
    return (
        <main className={styles.searchPage}>
            <section className={styles.searchFieldSection}>
                <img className={styles.logotipoImage} src='/CodeLab.png' alt='Logotipo CodeLab'/>
                <SearchField />
            </section>
            <div>
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
            </div>
        </main>
    );
};

export default Search;