import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Card from './components/Card/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './App.css';

class App extends Component {
  render(){
    return (
      <div style={{height:'100%'}}>
        <Toolbar />
        <SideDrawer />
        <main style={{marginTop: '9rem', marginLeft: '9rem'}}>
          <p className="title">Content Store</p>
        </main>
        <div className="row">
          <div className="main_text">
            <h4 style={{color:'#20B2AA'}} className="main_text_heading">
              Got bulkorders or almost similar orders ? Fill the order brief in an excel sheet
            </h4>
            <p style={{color:'#9ca4ab'}} className="main_text_subtext">
              If your<span>&apos;</span>e wondering about an easy way to place orders in large numbers, we provide a way customized just for that.
              Download our excel sheet, and fill the order brief in the prescribed format and submit. In case you need any help,
              <a href="#" style={{color:'#9ca4ab'}}>we are just a click away to assist you in placeing your order</a></p>
            <div className="button-div"><button style={{color:'#20B2AA'}} className="main-button">Over via excel sheet</button></div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Card className="card" title="Blog / Article" subtitle="from &#8377;500" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Newsletter / E-mailer" subtitle="from &#8377;1000" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Whitepaper" subtitle="from &#8377;2000" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Card className="card" title="e-book" subtitle="from &#8377;1000" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Report / Guide" subtitle="from &#8377;1000" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Product Description" subtitle="from &#8377;500" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Card className="card" title="Press Release" subtitle="from &#8377;2000" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Website Content" subtitle="from &#8377;1000" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Video Script" subtitle="from &#8377;1000" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Card className="card" title="Company Profile / Brochure" subtitle="from &#8377;2000" button="Order"
            text="Typically 450-400 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
        </div>
        <div className="footer_content">
          <a href="/" className="footer_icon"><FaTwitter /></a>
          <a href="/" className="footer_icon"><FaLinkedinIn /></a>
          <a href="/" className="footer_icon"><FaInstagram /></a>
          <a href="/" className="footer_icon"><FaFacebookF /></a>
          <p>Copyright @ 2019 White Panda Media Pvt. Ltd.<br></br>All rights reserved </p>
          <center>
            <table className="footer_table">
              <tr>
                <td><a href="#">Privacy policy</a></td>
                <td style={{color:'#909090'}}>|</td>
                <td><a href="#">Terms of service</a></td>
                <td style={{color:'#909090'}}>|</td>
                <td><a href="#">Service Agreement</a></td>
                <td style={{color:'#909090'}}>|</td>
                <td><a href="#">Contact us</a></td>
              </tr>
            </table>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
