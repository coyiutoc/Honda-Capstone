import React, {Component} from "react";
import styles from 'components/Personas/Personas.module.scss';
import {personasData} from 'data/process.js';

const Personas = (props) => {

  return (
    <div className={styles.container}>
      {personasData.map((elem, index) => {
        return <div className={[styles.card, styles.boxShadow].join(' ')} key={index}>
                <div className={styles.card__img}>
                  <img src={elem.img} />
                </div>
                <div className={styles.card__content}>
                  <div>
                    <div className={styles.card__name}>
                      {elem.text}
                    </div>
                    <div className={styles.card__subtitle}>
                      {elem.subtitle}
                    </div>
                    {elem.body && 
                      <div className={styles.card__body}>
                        {elem.body.map((sentence, index) => {
                          return <p key={index}>{sentence}</p>
                        })}
                      </div>}
                  </div>
                  <div onClick={()=> window.open(elem.url, "_blank")} className={styles.card__button}>
                    VIEW IN FIGMA
                  </div>
                </div>
              </div>
      })}
    </div>
  );
}

export default Personas;