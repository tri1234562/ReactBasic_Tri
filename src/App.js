import React, { Component } from 'react';
import Layout from './components/layout/layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';
import Checkout from './containers/CheckOut/Checkout';
import Orders from './containers/Orders/Orders';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from './Store/actions/indexActions';
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import './App.css';



class App extends Component {

  componentDidMount(){
    this.props.authAutoCheck();
   
  }

  render() {
  
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authAutoCheck:() => dispatch(Actions.checkAuthAuto()),
  }
}


export default withRouter(connect(null,mapDispatchToProps)(App));
