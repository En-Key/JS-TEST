import React, { useEffect } from 'react';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import styles from './App.module.scss'
import { Route, Routes } from 'react-router-dom';
import { Page } from './Containers/Page';
import { Layout } from './Components/Commons/Layouts';
import { ProductsPage } from './Containers/ProductsPage';
import { routes } from './utils/constants/routes';
import { AuthPage } from './Containers/AuthPage';

function App() {
  // console.log('APP RENDER');

  // useEffect(() => {
  //   console.log('COMPONENT DID MOUNT APP');
  // }, []);

  return (
    <div className={styles.wrapper}>
      <Layout>
      <Routes>
        <Route path={routes.MAIN} element={<MainPage />}/>
        <Route path={routes.PRODUCTS} element={<ProductsPage />}/>
        <Route path={routes.AUTH} element={<AuthPage />}/>
        <Route path={routes.POSTS}>
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
