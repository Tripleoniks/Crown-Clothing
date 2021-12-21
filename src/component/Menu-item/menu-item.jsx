import './menu-item.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return ( 
        <div className= {`${size} menu-item`} onClick={()=> history.push(`${linkUrl}${match.url}`)}  >
            
            <div style={{ backgroundImage : `url(${imageUrl})`}} className='background-image' />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    
     );
}

export default withRouter(MenuItem);