import React, {Component} from "react";
import styles from 'components/CardComponent/CardComponent.module.scss';

const CardComponent = (props) => {

  return (
    <div className={styles.card}>
      <img className={styles.cover} src={props.img}></img>
      <div className={styles.body}>
        <div className={styles.body__title}>{props.title}</div>
        <a href={props.url} className={styles.body__url}>Read in Medium &#8594;</a>
      </div>
    </div>
  );
}

export default CardComponent;