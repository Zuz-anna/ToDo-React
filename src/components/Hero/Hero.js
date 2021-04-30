import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>Things to do</h2>
    <img className={styles.image} src="https://i.postimg.cc/zv0N6hY2/space.png"/>
  </header>
)

export default Hero;