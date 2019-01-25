import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {mainRoutes} from "./routes";
import Main from './layout/main'
import {connect} from "react-redux";

class App extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <Main/>
                <div className='container'>
                    <BrowserRouter>
                        <Switch>
                            {mainRoutes.map(
                                ( {...route}, idx ) => {
                                    return (
                                        <Route {...route} key={`route${idx}`}/>
                                    );
                                }
                            )}
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default connect(
)(App);
