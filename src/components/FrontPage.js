import React from 'react';

import '../styles/FrontPage.scss';


const FrontPage = ({ bgImg, title }) => {

    return (
        <div 
            className='front-page-box'
            style={{ backgroundImage: `url(${bgImg})`}}
        >

            <div className='front-page-wrap'>

                <h1> { title } </h1>
                <span></span>

            </div>

        </div>
    )
}

export default FrontPage;