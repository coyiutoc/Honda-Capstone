import React, {Component} from "react";
import {Desktop, Tablet, Mobile, Default} from "components/MediaQueries.js";
import styles from 'components/ResearchGoalCards/ResearchGoalCards.module.scss';
import { ReactSVG } from 'react-svg';

import r1 from 'assets/images/research1.svg';
import r2 from 'assets/images/research2.svg';
import r3 from 'assets/images/research3.svg';

const data = [
  {text: "Understand how value is communicated through our stakeholders",
   img: r3},
  {text: "Empathize with Design Thinking facilitators and 'implementors'",
   img: r2},
  {text: "Identify pain points and opportunities within Design Thinking education",
   img: r1},
]

const ResearchGoalCards = () => {

  return (
    <div className={styles.container}>
      {data.map((elem, index) => {
        return <div className={[styles.card, styles.boxShadow].join(' ')} key={index}>
                <div className={styles.card__img}>
                  <ReactSVG src={elem.img} />
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