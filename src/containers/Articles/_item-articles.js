import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'

class ItemArticles extends Component{
    render() {
        return(
            <Link className='articles__item' to={`/articles/${ this.props.id }`}>
                <img src={ this.props.image.screen_url } alt=""/>
                <div className='info'>
                    <div className='info__left'>
                        <h1 className='info__name'>{ this.props.name }</h1>
                        <span className='info__publisher'>{ this.props.publisher.name }</span>
                    </div>
                    <div className='info__right'>
                        <span className='info__issues'>{ this.props.count_of_issue_appearances } issues</span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default ItemArticles