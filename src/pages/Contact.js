import React from 'react';

const Contact = ({ styleType, styleTitle }) => {
    return (
        <div className={styleType}>
            <h1 className={styleTitle}>Contact</h1>
        </div>
    );
}

export default Contact;