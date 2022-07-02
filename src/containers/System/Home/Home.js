import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeComponent.scss";
import icon from '../../../assets/images/Icon.png';
import logoGame from '../../../assets/images/logo game 1.png';
import background from '../../../assets/images/homeBackground.png';
import leftEnd from '../../../assets/images/leftEnd.png';
import topTitle from '../../../assets/images/topTitle.png';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  render() {
    return (
      <>
        <div className="home-boundary">
          <div className="top">
            <img className="icon" src={icon} />
            <img className="logo-game" src={logoGame} />
            <span className="login">Login</span>
          </div>
          <div className="center">
            <img className="background" src={background} />
          </div>
          <div className="end">
            <div className="left-end">
              <img src={leftEnd} />
              <div className="group-pair">
                <div className="pair">
                  <span className="head">3.208.863</span>
                  <span className="foot">Registered Users</span>
                </div>
                <div className="pair center-pair">
                  <span className="head">3.208.863</span>
                  <span className="foot">Registered Users</span>
                </div>
                <div className="pair">
                  <span className="head">3.208.863</span>
                  <span className="foot">Registered Users</span>
                </div>
              </div>
            </div>
            <div className="right-end">
              <img className="top-title" src={topTitle} />
              <span className="bottom-title">DevilSilly will be unlike any other Play-to-Earn Games you have experienced, because it was created by Gamers, for Gamers.</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
