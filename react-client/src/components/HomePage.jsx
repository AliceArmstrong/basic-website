import React, { Component } from 'react';
import NavBar from './HeaderComponent/NavBar.jsx';
import Footer from './FooterComponent/Footer.jsx';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
          Home page2
        <Footer />
      </div>
    )
  }
}
export default HomePage;
