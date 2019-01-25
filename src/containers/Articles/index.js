import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItemArticles from './_item-articles'

import {load_articles} from '../../action/articles'

const mapStateToProps = state => (
    {
    articles: state.articles.articles,
    page: state.articles.page
});

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({load:false})
    }

    loadArticles = () => {
        this.setState({load:true})
        this.props.load_articles(this.props.page + 1)
    }

    render() {
        return (
            <div>
                <div className='articles'>
                    {
                        this.props.articles.map(({...el} , idx) => {
                            return <ItemArticles {...el} id={idx} key={idx}/>
                        })
                    }
                </div>

                <input type='button' value={(this.state.load) ? 'Loading...' : 'SHOW MORE'} className='lodeMore' onClick={() => this.loadArticles()} />
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
)(Articles);