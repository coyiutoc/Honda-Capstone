import React, {Component} from "react";
import styles from 'components/Affinity/Affinity.module.scss';
import affinityImg from 'assets/images/affinity.png';

class Affinity extends Component {

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
        <img onClick={()=> window.open("https://app.mural.co/t/skipshelly9398/m/skipshelly9398/1587565286098/5abb2c3b21878ef05c46033596c70c94ec160231", "_blank")} 
             className={styles.img} src={affinityImg} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}></img>
        {this.state.isHovering && 
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              OPEN IN MURAL
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Affinity;