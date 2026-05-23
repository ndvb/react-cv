import React from '../../node_modules/react';

const listItems = (items) => {
    return ( 
        items.map((item, i) =>
            <li className={item.className} key={i}>
                <span>{item.text}</span>
            </li>
        ) 
    );
}
 
export default listItems;