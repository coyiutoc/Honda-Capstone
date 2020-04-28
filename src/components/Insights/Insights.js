import React from "react";
import ReactHtmlParser from 'react-html-parser';
import styles from 'components/Insights/Insights.module.scss';
import { ReactSVG } from 'react-svg';
import quoteImg from "assets/images/quote.svg";

const Insights = (props) => {

  return (
    <div className={styles.container}>
      {props.data.map((elem, index) => {
        return <div className={styles.insight} key={index}>
          <div className={styles.insight__title}>
            <h4>{elem.insightTitle}</h4>
          </div>
          <div className={styles.insight__body}>

            {/* TEXT */}
            <div className={styles.insight__text}>
              {ReactHtmlParser(elem.insightText)}
            </div>
            {/* QUOTES */}
            <div className={styles.insight__quotes}>
              {elem.quotes.map((quote, qIndex) => {
                return <div key={qIndex} className={[styles.quote].join(' ')}>
                  <ReactSVG className={styles.quote__img} src={quoteImg} />
                  <span>{quote.quote}
                    <div className={styles.quote__author}>— &nbsp; {quote.author}</div>
                  </span>
                </div>
              })}
            </div>
          </div>
        </div>
      })}
    </div>
  );
}

export default Insights;