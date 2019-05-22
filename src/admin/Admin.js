import React, {Component} from 'react'

import {Route} from 'react-router-dom'

import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';

class Admin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <h1>PAinel Administrativo</h1>
                <Route path = {'/'} component={AdminMenu}></Route>
                <Route path={'$[this.props.math.url}/portfolio'} component={AdminPortfolio} />
                <p>{JSON.stringify(this.props)}</p>
                

            </div>

        )
    }
}

export default Admin