import React, { Component } from 'react'
import {connect} from "react-redux";
import dateFormat from 'dateformat'

const mapStateToProps = state => (
    {
        articles: state.articles.articles
    });

class ArticlesView extends Component{
    render() {
        let id = document.location.href.split('/').pop()

        let character = this.props.articles[id]

        return(
            <div className='item articles'>
                <img src={character.image.original_url} alt=""/>

                <div className='item__info'>
                    <h1>{ character.name }</h1>
                    <dl>
                        <dt>Real name: </dt>
                        <dd>{ character.real_name }</dd>
                        <dt>Publisher: </dt>
                        <dd>{ character.publisher.name }</dd>
                        <dt>Gender:</dt>
                        <dd>{ character.gender }</dd>
                        <dt>Updated:</dt>
                        <dd>{dateFormat(character.date_last_updated, 'mmmm d, yyyy')}</dd>
                    </dl>
                    <div dangerouslySetInnerHTML={{ __html: character.deck }} />
                </div>
            </div>
        )
    }
}


export default connect(
    (mapStateToProps),
)(ArticlesView);