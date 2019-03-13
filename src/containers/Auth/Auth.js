import React,{Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import './Auth.css';
import {connect} from 'react-redux';
// import * as ActionTypes from '../../Store/actions/actionTypes';
import * as Actions from '../../Store/actions/indexActions';
class Auth extends Component {

    state = {
        Authen:{
            email: {
                ElementType: 'input',
                ElementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    minLength:5,
                },
                valid:false,
                Touched:false,
            },
            password: {
                ElementType: 'input',
                ElementConfig: {
                    type: 'password',
                    placeholder: 'Type Your Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength:6,
                },
                valid:false,
                Touched:false,
            },
        }
    }


    checkValidation(value, type) {
        let isValid = false;
        if (type.required) {
            isValid = value.trim() !== '';
        }
        if(type.minLength)
        {
            isValid = (value.length >= type.minLength && isValid);
        }
        if(type.maxLength)
        {
            isValid = (value.length <= type.maxLength && isValid);
        }
        return isValid;
    }

    OnHandleInput = (event, name) => {
        let changeForm = { ...this.state.Authen }; // ... la de no lay het thuoc tinh ma khong anh huong state goc
        let changeElement = { ...changeForm[name] };
        changeElement.value = event.target.value;
        changeElement.Touched = true;
        changeElement.valid = this.checkValidation(event.target.value,changeElement.validation);
        changeForm[name] = changeElement;
        this.setState({ Authen: changeForm });
        console.log(changeElement);
    } 

    submitHander = (e) => {
        e.preventDefault();
        this.props.onAuth(this.state.Authen.email.value,this.state.Authen.password.value);
    }

    
    render(){
        let ArrayInfo = [];
        for (let key in this.state.Authen) {
            let customer = {
                id: key,
                config: this.state.Authen[key]
            }
            ArrayInfo.push(customer);
        }

        const formInput = ArrayInfo.map(item => {
            let error = (item.config.Touched && !item.config.valid)? true: false
                        return (
                            <Input                           
                                key={item.id}
                                ElementType={item.config.ElementType}
                                ElementConfig={item.config.ElementConfig}
                                Error = {error}
                                value={item.config.value}
                                Label={item.config.Label}
                                Changed={(event) => this.OnHandleInput(event, item.id)}
                            />
                        )
        })

        return(
            <div className="form-auth">
                <form onSubmit={this.submitHander}> 
                    {formInput}
                    <Button type="Success btn-data middle"> hello </Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email,pass) => dispatch(Actions.Auth(email,pass)),
    }
}

export default connect(null,mapDispatchToProps)(Auth)