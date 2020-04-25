import React, {Component} from "react";
import {Desktop, Tablet, Mobile, Default} from "components/MediaQueries.js";
import styles from 'components/ProcessCards/ProcessCards.module.scss';
import { ReactSVG } from 'react-svg';

const ProcessCards = (props) => {

  return (
    <div className={styles.container}>
      {props.data.map((elem, index) => {
        return <div className={[styles.card, styles.boxShadow].join(' ')} key={index}>
                <div className={styles.card__img}>
                  <ReactSVG src={elem.img} />
                </div>
                <div className={styles.card__text}>
                  {elem.text}
                </div>
                {elem.body && 
                  <div className={styles.card__body}>
                    {elem.body.map((sentence, index) => {
                      return <p key={index}>{sentence}</p>
                    })}
                  </div>}
              </div>
      })}
    </div>
  );
}

export default ProcessCards;