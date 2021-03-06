import React from 'react';

const Features = ({ styleType, styleTitle }) => {
    return (
        <div className={styleType}>
            <h1 className={styleTitle}>Features</h1>
        </div>
    );
}

export default Features;