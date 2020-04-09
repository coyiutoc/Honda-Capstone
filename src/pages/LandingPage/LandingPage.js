import React, {Component} from "react";
import { ReactSVG } from 'react-svg'

import styles from 'pages/LandingPage/LandingPage.module.scss';
import headerImg from 'assets/images/headingDoodle.svg';
import squiggly from 'assets/images/squiggly.svg';
import star from 'assets/images/star.svg';

const LandingPage = () => {

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.backgroundContainer}>
            <ReactSVG className={styles.bgImg__squiggly} src={squiggly} />
            <ReactSVG className={styles.bgImg__star} src={star} />
        </div>
        <div className={styles.headingContainer}>
          <h2>An intelligent platform to learn design thinking.</h2>
          <p className={styles.headingText}>CMU MHCI Capstone project with Honda R&D Americas</p>
          <ReactSVG src={headerImg} />
        </div>
      </div>
      <div className={styles.buffer}/>
    </div>
  );
}

export default LandingPage;