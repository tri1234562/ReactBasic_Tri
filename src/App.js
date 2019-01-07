import React, { Component } from 'react';
import Layout from './components/layout/layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    );
  }
}

export default App;
