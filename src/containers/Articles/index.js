import React, { Component } from 'react'
import ItemArticles from './_item-articles'

class Articles extends Component{

    render() {
        var arrayAticles = [
            {
                name: 1
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            },
            {
                name: 2
            }
        ];
        return(
            <div className='articles'>
                {
                    arrayAticles.map(({...el}) => {
                        return <ItemArticles {...el}/>
                    })
                }
            </div>
        )
    }
}

export default Articles