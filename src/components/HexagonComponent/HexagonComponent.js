import React, {Component} from "react";
import {Desktop, Tablet, Mobile, Default} from "components/MediaQueries.js";
import styles from 'components/HexagonComponent/HexagonComponent.module.scss';

const HexagonComponent = () => {

  return (
    <div>
    <Desktop>
    <div className={styles.hexagonRow}>
      {/* Matt */}
      <div className={styles.hexagonContainer}>
        <div className={styles.name__matt}>
          <div className={styles.name__title}>Matt Franklin</div>
          <div className={styles.name__subtitle}>Project Manager</div>
        </div>
        <div className={styles.hexagon__matt}/>
      </div>
        {/* Margot */}
      <div className={styles.hexagonContainer}>
        <div className={styles.hexagon__margot}/>
        <div className={styles.name__margot}>
          <div className={styles.name__title}>Margot Henderson</div>
          <div className={styles.name__subtitle}>UX Research and Design</div>
        </div>
      </div>
        {/* Haley */}
      <div className={styles.hexagonContainer}>
        <div className={styles.name__haley}>
          <div className={styles.name__title}>Haley Park</div>
          <div className={styles.name__subtitle}>Design Lead</div>
        </div>
        <div className={styles.hexagon__haley}/>
      </div>
        {/* Michael */}
      <div className={styles.hexagonContainer}>
        <div className={styles.hexagon__michael}/>
        <div className={styles.name__michael}>
          <div className={styles.name__title}>Michael Silvestre</div>
          <div className={styles.name__subtitle}>UX Research and Design</div>
        </div>
      </div>
      {/* Caitlin */}
      <div className={styles.hexagonContainer}>
        <div className={styles.name__caitlin}>
          <div className={styles.name__title}>Caitlin Coyiuto</div>
          <div className={styles.name__subtitle}>Technical Lead</div>
        </div>
        <div className={styles.hexagon__caitlin}/>
      </div>
    </div>
    </Desktop>
    <Default>
          <div className={styles.hexagonRow}>
      {/* Matt */}
      <div className={styles.hexagonContainer}>
        <div className={styles.name__matt}>
          <div className={styles.name__title}>Matt Franklin</div>
          <div className={styles.name__subtitle}>Project Manager</div>
        </div>
        <div className={styles.hexagon__matt}/>
      </div>
        {/* Margot */}
      <div className={styles.hexagonContainer}>
        <div className={styles.name__margot}>
          <div className={styles.name__title}>Margot Henderson</div>
          <div className={styles.name__subtitle}>UX Research and Design</div>
        </div>
        <div className={styles.hexagon__margot}/>
      </div>
        {/* Haley */}
      <div className={styles.hexagonContainer}>
        <div className={styles.name__haley}>
          <div className={styles.name__title}>Haley Park</div>
          <div className={styles.name__subtitle}>Design Lead</div>
        </div>
        <div className={styles.hexagon__haley}/>
      </div>
        {/* Michael */}
      <div className={styles.hexagonContainer}>
        <div className={styles.name__michael}>
          <div className={styles.name__title}>Michael Silvestre</div>
          <div className={styles.name__subtitle}>UX Research and Design</div>
        </div>
        <div className={styles.hexagon__michael}/>
      </div>
      {/* Caitlin */}
      <div className={styles.hexagonContainer}>
        <div className={styles.name__caitlin}>
          <div className={styles.name__title}>Caitlin Coyiuto</div>
          <div className={styles.name__subtitle}>Technical Lead</div>
        </div>
        <div className={styles.hexagon__caitlin}/>
      </div>
    </div>
    </Default>
    </div>
  );
}

export default HexagonComponent;