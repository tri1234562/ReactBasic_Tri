
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import * as Actions from '../../../Store/actions/indexActions';
import {connect} from 'react-redux';
class Logout extends Component {

    componentDidMount() {
        this.props.Logout();
    }
    
    render(){
        return(
            <Redirect to='/' />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Logout: () => dispatch(Actions.logout()),
    }
}

export default connect(null,mapDispatchToProps)(Logout);