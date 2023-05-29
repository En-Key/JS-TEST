import React from 'react';
import { Header } from '../../Components/Commons/Header';
import { Footer } from '../../Components/Commons/Footer';
import { PostCard } from '../../Components/Posts/PostCard';
import styles from './PostPage.module.scss';

export const PostPage = () => {
  return <div className={styles.postPageWrapper}>
    <Header />
    <div className={styles.postList}>
      {/* <span>PostPage</span> */}
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    </div>
    <Footer />
    </div>
};
