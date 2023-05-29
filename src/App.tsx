import React from 'react';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import styles from './App.module.scss'
import { Route, Routes } from 'react-router-dom';
import { Page } from './Containers/Page';

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/posts">
          <Route element={<PostPage />} index />
          <Route path="one-post" element={<Page />} />
          </Route>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
