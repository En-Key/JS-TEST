import React from 'react';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import styles from './App.module.scss'
import { Route, Routes } from 'react-router-dom';
import { Page } from './Containers/Page';
import { Layout } from './Components/Commons/Layouts';

function App() {
  return (
    <div className={styles.wrapper}>
      <Layout>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/posts">
          <Route element={<PostPage />} index />
          <Route path=":id" element={<Page />} />
          </Route>
        <Route />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
