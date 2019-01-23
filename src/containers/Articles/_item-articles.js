import React, { Component } from 'react'

class ItemArticles extends Component{
    render() {
        return(
            <div className='articles__item'>
                <img src="https://i.pinimg.com/originals/80/f4/b5/80f4b5aafe1bf7a010cad6985576a9c9.jpg" alt=""/>
                <div className='info'>
                    <div className='info__left'>
                        <h1 className='info__name'>Name comics</h1>
                        <span className='info__publisher'>DC inco</span>
                    </div>
                    <div className='info__right'>
                        <span className='info__issues'>1201 issues</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemArticles