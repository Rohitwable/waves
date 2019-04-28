import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import Layout from './hoc/layout'
import RegisterLogin from './components/register-login'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/register_login' exact component={RegisterLogin}/>
            </Switch>
        </Layout>
    )
}

export default Routes