import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className='bck_b_light'>
                <div className='container'>
                    <div className='left'>
                        <div className='logo'>
                            Logo
                        </div>
                    </div>
                    <div className='right'>
                        <div className='top'>
                            Links
                        </div>
                        <div className='bottom'>
                            Links
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}