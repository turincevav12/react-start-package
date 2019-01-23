import React, {Component} from 'react'
import {
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom'
import {mainRoutes} from "./routes";

class App extends Component {
    render() {
        return (
            <div>
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
        )
    }
}

export default App
