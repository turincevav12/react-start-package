import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {mainRoutes} from "./routes";
import Main from './layout/main'
import {connect} from "react-redux";
import {load_articles} from "../action/articles";

const mapStateToProps = state => (
    {
        page: state.articles.page
    });

class App extends Component {

    componentDidMount() {
        this.props.load_articles(this.props.page + 1)
    }

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

function mapDispatchToProps(dispatch) {
    return {
        load_articles: (page) => dispatch(load_articles(page)),
    };
}

export default connect(
    (mapStateToProps),
    mapDispatchToProps
)(App);
