import React from 'react';
import Item from "./Item";



const PackingList = ({items, onDeleteItem, onToggleItems}) => {
    return (
        <div className='list'>
            <ul>
                {items.map((item) => (<Item key={item.id} onToggleItems={onToggleItems} onDeleteItem={onDeleteItem} items={item}/>))}
            </ul>
        </div>
    );
};

export default PackingList;