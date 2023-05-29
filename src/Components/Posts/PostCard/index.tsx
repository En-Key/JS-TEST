import React from 'react';
import styles from './PostCard.module.scss';

export const PostCard = () => {
  return <div className={styles.cardWrapper}>
    <span className={styles.label}>Post Label</span>
    <p className={styles.cotent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt quo tenetur atque illum, vitae obcaecati nostrum, non vero facere minima ipsam dignissimos quisquam cumque sunt voluptates consequuntur impedit adipisci.</p>
    </div>
};
