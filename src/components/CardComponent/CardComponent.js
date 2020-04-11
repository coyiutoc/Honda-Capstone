import React, {Component} from "react";
import styles from 'components/CardComponent/CardComponent.module.scss';

const CardComponent = (props) => {

  return (
    <div className={styles.card}>
      <img className={styles.cover} src="http://lorempixel.com/400/400/animals/"></img>
      <div className={styles.body}>
        <div className={styles.body__title}>Team Honda, start your engines</div>
        <a href="#" className={styles.body__url}>Read in Medium &#8594;</a>
      </div>
    </div>
  );
}

export default CardComponent;