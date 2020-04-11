import React, {Component} from "react";
import { ReactSVG } from 'react-svg'
import { Link } from "react-router-dom";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import HexagonComponent from "components/HexagonComponent/HexagonComponent.js";
import CardComponent from "components/CardComponent/CardComponent.js";

import routes from "routes.js";
import styles from 'pages/LandingPage/LandingPage.module.scss';
import headerImg from 'assets/images/headingDoodle.svg';
import squiggly from 'assets/images/squiggly.svg';
import star from 'assets/images/star.svg';

const LandingPage = () => {

  return (
    <div>
      {/* ======== HEADER CONTENT ======== */}
      <div className={styles.container}>
        <div className={styles.backgroundContainer}>
            <ReactSVG className={styles.bgImg__squiggly} src={squiggly} />
            <ReactSVG className={styles.bgImg__star} src={star} />
        </div>
        <div className={styles.spacing}/>
        <div className={styles.headingContainer}>
          <h2>An intelligent platform to learn design thinking.</h2>
          <p className={styles.headingText}>CMU MHCI Capstone project with Honda R&D Americas</p>
          <ReactSVG className={styles.headerImg} src={headerImg} />
        </div>
      </div>

      {/* ======== PROCESS ======== */}
      <div className={styles.infoBlock}>
        <div className={styles.infoBlock__title}>Our Process -</div>
      </div>

      {/* ======== TEAM HEXAGONS ======== */}
      <div className={styles.infoBlock}>
        <div className={styles.infoBlock__subtitle}>Meet the team -</div>
        <div className={styles.infoBlock__title}>MHCI Honda Pitt Crew</div>

        <HexagonComponent />

        <div className={styles.seeMore}>
          <Link
            to={`${routes.team}`}
          >
            See More &#8594;
          </Link>
        </div>
      </div>

      {/* ======== MEDIUM POSTS ======== */}
      <div className={styles.infoBlock__withBackground}>
        <div className={styles.infoBlock__title}>Blog - </div>

        <div className={styles.carousel}>
          <Carousel
            slidesPerPage={4}
            infinite
            keepDirectionWhenDragging
          >

            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </Carousel>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;