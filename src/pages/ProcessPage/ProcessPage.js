import React, { Component, useEffect, useRef } from "react";
import { ReactSVG } from 'react-svg';
import { HashLink } from 'react-router-hash-link';
import styles from 'pages/ProcessPage/ProcessPage.module.scss';
import star from 'assets/images/star.svg';
import { data, researchdata, keyTakeawaysData, insightsData } from 'data/process.js';

import routes from "routes.js";

// Any custom components for sections here:
import ProcessCards from "components/ProcessCards/ProcessCards.js";
import Affinity from "components/Affinity/Affinity.js";
import JourneyMap from "components/JourneyMap/JourneyMap.js";
import Personas from "components/Personas/Personas.js";
import Insights from "components/Insights/Insights.js";

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
        return <JourneyMap />;
      case "PERSONAS":
        return <Personas />;
      case "INSIGHTS_DATA":
        return <Insights data={insightsData.data} />;
      case "INSIGHTS_LANGUAGE":
        return <Insights data={insightsData.language} />;
      case "INSIGHTS_BELIEVE":
        return <Insights data={insightsData.believe} />;
      case "INSIGHTS_UNDERSTAND":
        return <Insights data={insightsData.understand} />;
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
              <div className={styles.section__title}>{elem.sectionTitle + " —"}</div>

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
          <div className={styles.section__title}>{"Opportunities —"}</div>
          <div className={styles.subsection}>
            <div className={styles.subsection__subtitle}><h3>How might we
            Enable Collaboration?</h3>
              <p>Through the summer months, our team will be testing out ideas to build upon our research and create solutions for the opportunities we’ve mapped out in our report.</p>
            </div>
            <br />  <br />
            <ProcessCards data={keyTakeawaysData} />
          </div>
        </div>
        <div className={styles.section} >
          <div className={styles.section__title}>{"Final Direction —"}</div>
          <div className={styles.subsection}>
            <br />
            <div className={styles.subsection__subtitle}>
              <h4>An Intelligent Platform or Tool for </h4><br />
              <h3>Collaboration & Communication of Design Artifacts & Insights.</h3></div>
            <div className={styles.subsection__text}>
              <p> We completed an initial co-designing workshop with our client following presenting our findings to our team at Honda, and established alignment on what opportunities to prioritize through this research. This included:</p>
              <br />
              <ol>
                <li><span> How might we document and tag ongoing research so that data is searchable and usable by others?</span> </li>
                <li><span>How might we better evaluate and demonstrate the credibility of our research?</span> </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessPage;