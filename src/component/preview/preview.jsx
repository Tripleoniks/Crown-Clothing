import './preview.scss';
import React from 'react';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({title, items}) => {
    return ( 
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                .filter((items, idx)=> idx <4)
                .map(({id, ...otherItemsPros}) =>(
                        <CollectionItem key={id} {...otherItemsPros}/>
                    ))}
            </div>
        </div>
     );
}
 
export default CollectionPreview;