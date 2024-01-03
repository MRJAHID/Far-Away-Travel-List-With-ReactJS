import React from 'react';

const Stats = ({item}) => {

    if (!item.length) {
        return (
            <p className='stats'>
                <em>
                    Start adding some items to your packing list 💼
                </em>
            </p>
        )
    }

    const numItems = item.length;
    const numPacked = item.filter(item => item.packed).length;
    const numPercantage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {numPercantage === 100 ? 'You got everything! Ready to go ✈️' :
                    `💼 You have ${numItems} items on your list, and you already
                packed ${numPacked} (${numPercantage + '%'})`
                }</em>
        </footer>
    );
};

export default Stats;