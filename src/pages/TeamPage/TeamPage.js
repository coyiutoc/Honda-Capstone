import React, {Component} from "react";
import { ReactSVG } from 'react-svg'
import styles from 'pages/TeamPage/TeamPage.module.scss';
import teamPhoto from 'assets/images/team_photo.png';
import squiggly from 'assets/images/squiggly.svg';
import data from 'data/bios.js';

import MediaQuery from 'react-responsive';

function listRowStyle(index) {
  return index % 2 ? styles.list__rowOffset : styles.list__row;
}

const TeamPage = () => {
  return (
    <div>
      <div className={styles.background}/>
        <ReactSVG className={styles.squiggly} src={squiggly} />

        <div className={styles.headerContainer}>
          <div className={styles.headerContainer__text}>
            <p>Team -</p>
            <h2>MHCI Honda Pitt Crew</h2>
            <p>We are special yada yada something inspiring here</p>
          </div>
          <div className={styles.headerContainer__img}>
            <img src={teamPhoto}></img>
          </div>
        </div>
        <div className={styles.list}>
          {Object.keys(data).map((name, index) => {
            return  <div className={listRowStyle(index)} key={index}>
                      <div className={styles.list__img}>
                        <img src={data[name].imgURL}></img>
                      </div>
                      <div className={styles.content}>
                        <div className={styles.content__name}> {data[name].name} </div>
                        <div className={styles.content__position}> {data[name].position} </div>
                        <div className={styles.content__bio}> {data[name].bio} </div>
                      </div>
                    </div>
          })}
        </div>
    </div>
  );
}

export default TeamPage;