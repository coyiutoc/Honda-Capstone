import React, {Component} from "react";
import {Desktop, Tablet, Mobile, Default} from "components/MediaQueries.js";
import styles from 'components/ResearchGoalCards/ResearchGoalCards.module.scss';

const data = [
  {text: "Understand how value is communicated through our stakeholders",
   img: ""},
  {text: "Empathize with Design Thinking facilitators and 'implementors'",
   img: ""},
  {text: "Identify pain points and opportunities within Design Thinking education",
   img: ""},
]

const ResearchGoalCards = () => {

  return (
    <div className={styles.container}>
      {data.map((elem, index) => {
        return <div className={[styles.card, styles.boxShadow].join(' ')} key={index}>
                <div className={styles.card__img}>
                  icon here
                </div>
                <div className={styles.card__text}>
                  {elem.text}
                </div>
              </div>
      })}
    </div>
  );
}

export default ResearchGoalCards;