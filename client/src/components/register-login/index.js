import React, { Component } from 'react'
import MyButton from '../utils/button'
import Login from './login'
const RegisterLogin = () => {
    return (
        <div className='page_wrapper'>
            <div className='container'>
                <div className='register_login_container'>
                    <div className='left'>
                    <h2>New customers</h2>
                    <p>This is the paragraph</p>
                    <MyButton
                    type='default'
                    title='create account'
                    linkTo='/register'
                    addStyles={{
                        margin: '10px 0 0 0'
                    }}
                    />
                    </div>
                    <div className='right'>
                        <h2>Registered customers</h2>
                        <p>Please log in here</p>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterLogin