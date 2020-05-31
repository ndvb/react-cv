import React from '../../node_modules/react';

const listItems = (items) => {
    return ( 
        items.map((item, i) =>
            <li className={item.toLowerCase().replace(' ','-')} key={i}>
                <span>{item}</span>
            </li>
        ) 
    );
}
 
export default listItems;