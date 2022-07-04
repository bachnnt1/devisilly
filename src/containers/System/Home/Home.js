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
    this.state = {
      isDisplayMenuDetail: false,
    }
  }
  componentDidMount() {
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
  }
  onFocusMenu = () => {
    let { isDisplayMenuDetail } = this.state;
    this.setState({
      isDisplayMenuDetail: !isDisplayMenuDetail
    });
    console.log(isDisplayMenuDetail);
  };
  doClickMenu = () => {
    this.setState({
      isDisplayMenuDetail: false
    });
  }
  render() {
    let { isDisplayMenuDetail } = this.state;
    return (
      <>
        {isDisplayMenuDetail && <div className="menu">
          <span className="close-menu-button" onClick={this.doClickMenu}>x</span>
          <p>Home</p>
          <p>Vision</p>
          <p>DevilSilly World</p>
          <p>Tokenomics</p>
          <p>Roadmap</p>
          <p>Our team</p>
          <p>Partner</p>
          <p>Technology</p>
        </div>}
        <div className="home-boundary">
          <div className="top">
            <img className="icon" onClick={this.onFocusMenu} src={icon} alt="iconMenu" />
            <img className="logo-game" src={logoGame} alt="logoGame" />
            <span className="login">Login</span>
          </div>
          <div className="center">
            <img className="background" src={background} alt="background" />
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
