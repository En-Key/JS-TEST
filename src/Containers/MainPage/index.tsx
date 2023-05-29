import React from 'react';
import { Header } from '../../Components/Commons/Header';
import { Footer } from '../../Components/Commons/Footer';
import { MainInfo } from '../../Components/Main/MainInfo';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return <div>
    <Header />
    <div className={styles.mainPageWrapper}>
      <span>MainPage</span>
    <MainInfo />
    </div>
    <Footer />
    </div>
};
