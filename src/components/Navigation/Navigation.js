import React, {Component} from "react";
import { Link } from "react-router-dom";
import routes from "routes.js";
import styles from 'components/Navigation/Navigation.module.scss';

const Navigation = () => {

  return (
    <div className={styles.container}>
      <Link
        to={`${routes.home}`}
        className={styles.link__home}
      >
        Home 
      </Link>
      <Link
        to={`${routes.process}`}
        className={styles.link__process}
      >
        Process 
      </Link>
      <Link
        to={`${routes.team}`}
        className={styles.link__team}
      >
        Team
      </Link>
    </div>
  );
}

export default Navigation;