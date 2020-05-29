import React from '../../node_modules/react';

const listItems = (items) => {
    return ( 
        items.map((item, i) =>
            <li key={i}>{item}</li>
        ) 
    );
}
 
export default listItems;