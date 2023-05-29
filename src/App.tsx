import React from 'react';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <MainPage /> */}
      <PostPage />
    </div>
  );
}

export default App;
