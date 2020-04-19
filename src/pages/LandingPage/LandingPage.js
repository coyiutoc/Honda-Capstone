import React, { useEffect } from "react";
import { ReactSVG } from 'react-svg'
import { Link } from "react-router-dom";
import { Desktop, Tablet, Mobile, Default, NotMobile } from "components/MediaQueries.js";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styles from 'pages/LandingPage/LandingPage.module.scss';

// Data
import routes from "routes.js";
import mediumData from "data/mediumPosts.js";

// Subcomponents
import HexagonComponent from "components/HexagonComponent/HexagonComponent.js";
import CardComponent from "components/CardComponent/CardComponent.js";
import squiggly from 'assets/images/squiggly.svg';
import star from 'assets/images/star.svg';
import LandingSVG from 'pages/LandingPage/LandingImg.js';
import ProcessSVG from 'components/DoubleDiamond/DoubleDiamond.js';

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function renderCardComponents() {
    return mediumData.map((elem, index) => {
      return <CardComponent key={index} title={elem.title} url={elem.url} img={elem.img}/>
    });
  }

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
          <Desktop>
            <LandingSVG width="596"/>
          </Desktop>
          <Tablet>
            <LandingSVG width="450"/>
          </Tablet>
          <Mobile>
            <LandingSVG width="300"/>
          </Mobile>
        </div>
      </div>

      {/* ======== PROCESS ======== */}
      <div className={styles.infoBlock}>
        <div className={styles.infoBlock__title}>Our Process -</div>
        <div className={styles.processImg}>
          <Desktop>
            <ProcessSVG width="888" />
          </Desktop>
          <Tablet>
            <ProcessSVG width="700" />
          </Tablet>
          <Mobile>
            <ProcessSVG width="300" />
          </Mobile>
        </div>
        <div className={styles.seeMore}>
          <Link
            to={`${routes.process}`}
          >
            See More &#8594;
          </Link>
        </div>
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

        <Desktop>
          <div className={styles.carousel}>
            <Carousel
              slidesPerPage={4}
              infinite
              keepDirectionWhenDragging
            >
            {renderCardComponents()}
            </Carousel>
          </div>
        </Desktop>
        <Default>
          <div className={styles.carousel}>
            <Carousel
              slidesPerPage={2}
              infinite
              keepDirectionWhenDragging
            >
            {renderCardComponents()}
            </Carousel>
          </div>
        </Default>
      </div>

    </div>
  );
}

export default LandingPage;