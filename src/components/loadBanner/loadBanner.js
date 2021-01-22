import React from 'react';
import Loader from '../loader';
import styles from './loadBanner.module.css';

function LoadBanner() {
  return (
    <div className={styles.loadBanner}>
      <Loader />
    </div>
  );
}

export default LoadBanner;
