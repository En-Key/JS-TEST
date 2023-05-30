import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';

export const Header = () => {
  return <header className={styles.header}>
    <Link to={routes.MAIN}>Main Page</Link>
    <Link to={routes.POSTS}>Posts Page</Link>
    <Link to="/posts/212" state={'test state'}>One post page</Link>
    <Link to={routes.PRODUCTS}>Products Page</Link>
    <Link to={routes.AUTH}>Auth page</Link>
  </header>
};
