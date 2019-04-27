import React, { Component, Fragment } from 'react'
import Header from '../../components/header-footer/header'
import Footer from '../../components/header-footer/footer'
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className='page_container'>
                    {this.props.children}
                </div>
                <Footer/>
            </Fragment>
        )
    }
}