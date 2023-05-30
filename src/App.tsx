import React, { useEffect } from 'react';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import styles from './App.module.scss'
import { Route, Routes } from 'react-router-dom';
import { Page } from './Containers/Page';
import { Layout } from './Components/Commons/Layouts';
import { ProductsPage } from './Containers/ProductsPage';

function App() {
  // console.log('APP RENDER');

  // useEffect(() => {
  //   console.log('COMPONENT DID MOUNT APP');
  // }, []);

  return (
    <div className={styles.wrapper}>
      <Layout>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/products" element={<ProductsPage />}/>
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
