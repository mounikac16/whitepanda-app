import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Card from './components/Card/Card';
import './App.css';

class App extends Component {
  render(){
    return (
      <div style={{height:'100%'}}>
        <Toolbar />
        <SideDrawer />
        <main style={{marginTop: '100px', marginLeft: '9rem', textStyle: ''}}>
          <h1 classNAme="title">Content Store</h1>
        </main>
        <div className="main_container">
        </div>
        <div className="row">
          <div className="column">
            <Card className="card" title="Blog / Article" subtitle="from " number="500" button="Order"
            text="Typically 4550-500 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Newsletter / E-mailer" subtitle="from " number="1000" button="Order"
            text="Typically 4550-500 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Whitepaper" subtitle="from " number="2000" button="Order"
            text="Typically 4550-500 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Card className="card" title="e-book" subtitle="from " number="1000" button="Order"
            text="Typically 4550-500 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Report / Guide" subtitle="from " number="1000" button="Order"
            text="Typically 4550-500 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
          <div className="column">
            <Card className="card" title="Product Description" subtitle="from " number="500" button="Order"
            text="Typically 4550-500 words, an e-book is perfect for your target audience ranging from prospecive customers to users"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
