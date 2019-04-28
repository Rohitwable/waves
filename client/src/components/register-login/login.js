import React, { Component } from 'react'
import { connect} from 'react-redux'
import FormField from '../utils/form/formfield'
class Login extends Component {
    state ={
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                element: 'input',
                value: '',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter Your Eamil'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config:{
                    name:'password_input',
                    type:'email',
                    placeholder:'Enter Your Password'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }
    submitForm = (event) =>{

    }
    updateForm = (element)=>{

    }
    render(){
        return (
            <div className='signin_wrapper'> 
                <form onSubmit={(event)=>this.submitForm(event)}>
                    <FormField
                    id={'email'}
                    formdata={this.state.formdata.email}
                    change={(element)=>this.updateForm(element)}
                    />
                     <FormField
                    id={'password'}
                    formdata={this.state.formdata.password}
                    change={(element)=>this.updateForm(element)}
                    />
                </form>
            </div>
        )
    }
}

export default connect()(Login)