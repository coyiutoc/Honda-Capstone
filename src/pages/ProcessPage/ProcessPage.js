import React, { Component, useEffect, useRef } from "react";
import { ReactSVG } from 'react-svg';
import { HashLink } from 'react-router-hash-link';
import styles from 'pages/ProcessPage/ProcessPage.module.scss';
import star from 'assets/images/star.svg';
import { data, researchdata, keyTakeawaysData } from 'data/process.js';
import routes from "routes.js";

// Any custom components for sections here:
import ProcessCards from "components/ProcessCards/ProcessCards.js";
import Affinity from "components/Affinity/Affinity.js";
import JourneyMap from "components/JourneyMap/JourneyMap.js";

const ProcessPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleNavigationHighlight);

    return () => {
      window.removeEventListener("scroll", handleNavigationHighlight);
    }
  });

  function renderAdditionalComponents(data) {
    if (!data.customComponentKey) { return; }
    switch (data.customComponentKey) {
      case "RESEARCH_GOAL_CARDS":
        return <ProcessCards data={researchdata} />;
      case "AFFINITY":
        return <Affinity />;
      case "JOURNEYMAP":
        return <JourneyMap />;;
    }
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
        <p>We conducted 3 rounds of storyboarding & speed dating, 26 semi-structured interviews and gathered over 500 data points. Here's a brief summary of what we generated and found along the way.</p>
        <ReactSVG className={styles.bgImg__squiggly} src={star} />
      </div>
      <div className={styles.content}>
        <div className={styles.content__navigation} id="navigationLinks">
          <div>
            {
              data.map((elem, index) => {
                return <HashLink key={index} to={routes.process + "/#" + elem.sectionTitle}>{elem.sectionTitle}</HashLink>
              })
            }
          </div>
        </div>
        <div className={styles.content__body}>
          {data.map((elem, index) => {
            return <div key={index} id={elem.sectionTitle} className={styles.section}>
              <div className={styles.section__title}>{elem.sectionTitle + " -"}</div>

              {elem.subsections.map((subsection, index) => {
                return <div className={styles.subsection} key={index}>
                  <div className={styles.subsection__subtitle}><h3>{subsection.subsectionTitle}</h3></div>
                  {subsection.text && <div className={styles.subsection__text}>{subsection.text}</div>}
                  {subsection.boxedText && <div className={styles.subsection__boxed}>{subsection.boxedText}</div>}
                  {subsection.customComponentKey && renderAdditionalComponents(subsection)}
                </div>
              })}

            </div>
          })}
        </div>
      </div>

      <div className={styles.conclusion}>
        <div className={styles.section__noTopPadding}>
          <div className={styles.section__title}>{"Key Takeaways -"}</div>
          <div className={styles.subsection}>
            <div className={styles.subsection__subtitle}><h3>Sharing artifacts can help create alignment in...</h3></div>
            <ProcessCards data={keyTakeawaysData} />
          </div>
        </div>
        <div className={styles.section__noTopPadding}>
          <div className={styles.section__title}>{"Final Direction -"}</div>
          <div className={styles.subsection}>
            <div className={styles.subsection__subtitle}><h3>Enabling better collaboration and communication of design artifacts and insights</h3></div>
            <div className={styles.subsection__text}>
              Another significant theme that arose in our findings is the difficulty in sharing artifacts and transferring research and information. These transactions, both within and between teams, prove particularly challenging, especially when people are not in the same location. There are many angles to approach this opportunity as well, from team collaboration workflows to analysis and persuasive visualization tools.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessPage;