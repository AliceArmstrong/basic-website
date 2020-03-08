import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends Component { // 'class' is causing error
  // export const Footer = () => {
    // constructor(props) {
    //   super(props);
    // }

    render() {
    return (
      <footer>
        <div>
          <p>This website is a work in progress. It's got a long way to go.</p>
          <p>In the meantime, check out some useful links:</p>
          <a href="https://docs.google.com/document/d/1OKJJ5tQA1ICzFf5fEdLEL2XC7t-CwTLAVJVDaqv_xIE" target="_blank">CV</a><br/>
          <a href="https://www.linkedin.com/in/alice-armstrong-a85021126/" target="_blank">LinkedIn</a><br/>
          <a href="https://github.com/AliceArmstrong" target="_blank">Github</a><br/>
        </div>
      </footer>
    )
  }
}
// export default Footer;
