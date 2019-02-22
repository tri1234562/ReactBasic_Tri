import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import './ContactData.scss';
import axios from '../../../axios-connect.js';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component {
    state = {
        InforOrder: {
            name: {
                ElementType: 'input',
                ElementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength:5,
                },
                valid:false,
                Touched:false,
            },
            phoneNumber: {
                ElementType: 'input',
                ElementConfig: {
                    type: 'number',
                    placeholder: 'Your Phone Number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength:5,
                },
                valid:false,
                Touched:false,
            },
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
            street: {
                ElementType: 'input',
                ElementConfig: {
                    type: 'text',
                    placeholder: 'Your Address'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid:false,
                Touched:false,
            },
            Province: {
                ElementType: 'select',
                Label: 'Choose Your Province',
                ElementConfig: {
                    option: [
                        { value: 'HCM', displayValue: 'Ho Chi Minh' },
                        { value: 'VT', displayValue: 'Vung Tau' },
                        { value: 'NTH', displayValue: 'Ninh Thuan' },
                    ]
                },
                value: 'HCM', //default gia tri cho select
                valid:true,
                validation: {
                    required: true,
                },

            },
            Mode: {
                ElementType: 'select',
                Label: " What's mode do you want? ",
                ElementConfig: {
                    option: [
                        { value: 'fastest', displayValue: 'Delivery Now' },
                        { value: 'normal', displayValue: 'Wait A Minute' },
                        { value: 'sometime', displayValue: 'Another Time' },
                    ]
                },
                value: 'fastest',
                valid:true,
                validation: {
                    required: true,
                },
            },
        },
        loading: false,
    }
    //End state


    OnHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props);
        this.setState({ loading: true });

        let infoCustommer = {};

        for (let info in this.state.InforOrder) {
            infoCustommer[info] = this.state.InforOrder[info].value;
        }
        console.log(infoCustommer);
        const dataCustom = {
            ingredients: this.props.ingredients,
            total: this.props.totalprice,
            personInformation: infoCustommer,
        };// --> this data will post up to database

        axios.post("/orders.json", dataCustom).then((response) => {
            this.setState({ loading: false });
            // console.log(response);
            if (this.state.loading === false) {
                setTimeout(() => {
                    window.alert('Order Complete');
                    this.props.history.push('/');
                }, 300)
            }
        }).catch((error) => {
            console.log(error);
        })
    } 
    //End OnHandleSubmit



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
    // End checkValidation


    OnHandleInput = (event, name) => {
        let changeForm = { ...this.state.InforOrder }; // ... la de no lay het thuoc tinh ma khong anh huong state goc
        let changeElement = { ...changeForm[name] };
        changeElement.value = event.target.value;
        changeElement.Touched = true;
        changeElement.valid = this.checkValidation(event.target.value,changeElement.validation);
        changeForm[name] = changeElement;
        this.setState({ InforOrder: changeForm });
        console.log(changeElement);
    } 
    // End OnHandleInput


    render() {
        let ArrayInfo = [];
        for (let key in this.state.InforOrder) {
            let customer = {
                id: key,
                config: this.state.InforOrder[key]
            }
            ArrayInfo.push(customer);
        }
        // console.log(ArrayInfo);

        let post = ''
        if (this.state.loading) {
            post = <Spinner />;
        }
        else {
            post = <form onSubmit={this.OnHandleSubmit}>
                {ArrayInfo.map((InfoConfig) => {
                    let error = (InfoConfig.config.Touched && !InfoConfig.config.valid)? true: false
                    return (
                        <Input                           
                            key={InfoConfig.id}
                            ElementType={InfoConfig.config.ElementType}
                            ElementConfig={InfoConfig.config.ElementConfig}
                            Error = {error}
                            value={InfoConfig.config.value}
                            Label={InfoConfig.config.Label}
                            Changed={(event) => this.OnHandleInput(event, InfoConfig.id)}
                        />
                    )
                })}
                <Button type="Success btn-data"> Click ME  </Button>
            </form>
        }


        return (
            <div className="ContactData">
                <h3> Please Fill Information In This Form </h3>
                {post}
            </div>
        )
    } //End render
}

export default withRouter(ContactData)

