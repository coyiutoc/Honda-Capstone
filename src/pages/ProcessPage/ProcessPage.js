import React, {Component, useEffect, useRef} from "react";
import { ReactSVG } from 'react-svg';
import { HashLink } from 'react-router-hash-link';
import styles from 'pages/ProcessPage/ProcessPage.module.scss';
import star from 'assets/images/star.svg';
import data from 'data/process.js';
import routes from "routes.js";

// Any custom components for sections here:
import HexagonComponent from "components/HexagonComponent/HexagonComponent.js";

const ProcessPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleNavigationHighlight);

    return () => {
      window.removeEventListener("scroll", handleNavigationHighlight);
    }
  });

  function renderAdditionalComponents(data) {
    if (!data.customComponentKey) {return; }
    // switch(data.customComponentKey) {
    //   case "HEXAGON":
    //       return <HexagonComponent />;
    // }  
  }

  function handleNavigationHighlight() {
    let fromTop = window.scrollY;
    let links = document.getElementById("navigationLinks").childNodes[0].children;
    
    for (let link of links) {
      let title = link.innerHTML;
      let section = document.getElementById(title);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add(styles.current);
        link.classList.remove(styles.notCurrent);
      } else {
        link.classList.add(styles.notCurrent);
        link.classList.remove(styles.current);
      }
    }
  }

  return (
    <div>
      <div className={styles.header}>
        <h2>Drive into our Process</h2>
        <p>Blobbity blob of blobs </p>
        <ReactSVG className={styles.bgImg__squiggly} src={star} />
      </div>
      <div className={styles.content}>
        <div className={styles.content__navigation} id="navigationLinks">
          <div>
            {
              data.map((elem, index) => {
                return <HashLink key={index} to={routes.process+"/#" + elem.sectionTitle}>{elem.sectionTitle}</HashLink>
              })
            }
          </div>
        </div>
        <div className={styles.content__body}>
          {data.map((elem, index) => {
            return  <div key={index} id={elem.sectionTitle} className={styles.content__section}>
                      <div className={styles.content__title}>{elem.sectionTitle + " -"}</div>
                      <div className={styles.content__subtitle}><h3>{elem.subtitle}</h3></div>
                      <div className={styles.content__text}>{elem.text}</div>
                      {renderAdditionalComponents(elem)}
                    </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default ProcessPage;