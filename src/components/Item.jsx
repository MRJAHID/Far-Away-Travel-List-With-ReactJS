import React from 'react';

const Item = ({items, onDeleteItem, onToggleItems}) => {
    return (
        <li>
            <input type="checkbox" value={items.packed} onChange={() => onToggleItems(items.id)}/>
            <span style={items.packed ? {textDecoration: 'line-through'} : {}}>
                {items.quantity} {items.description}</span>
            <button onClick={() => onDeleteItem(items.id)}>❌</button>
        </li>
    );
};

export default Item;