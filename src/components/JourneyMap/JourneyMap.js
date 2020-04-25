import React, {Component} from "react";
import styles from 'components/Affinity/Affinity.module.scss';
import journeyImg from 'assets/images/journeymap.png';

class JourneyMap extends Component {

  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    }
  }

  handleMouseHover() {
    let currState = this.state.isHovering;
    this.setState({
      isHovering: !currState
    })
  }

  render() {
    return (
      <div className={[styles.container, styles.boxShadow].join(' ')}>
        <img onClick={()=> window.open("https://www.figma.com/proto/9k9UmLHOVq6L9raD1zGdIn/Customer-Journey-Map?node-id=40%3A2&scaling=scale-down", "_blank")} 
             className={styles.img} src={journeyImg} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}></img>
        {this.state.isHovering && 
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              VIEW IN FIGMA
            </div>
          </div>
        }
      </div>
    );
  }
}

export default JourneyMap;