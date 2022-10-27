import React from 'react';
import classes from './Card.module.css';

const Card = props => {
    /* 
    This is a custom component that holds other
    components inside of it. Since it's custom and
    not a built in HTML element, we need to ensure
    that any additional classes that are supposed
    to be applied inside of Card.js get added.

    We can do this with a template literal `` 
    since we're working with a string that needs
    to be changed dynamically.

    We add classes.card to feed in the styles from
    Card.module.css, and then feed in the styles
    we receive through the className prop (that
    we just defined below). This will ensure the
    inner div below will receive all props needed
    to style this Component.
    */

    return <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
}

export default Card;