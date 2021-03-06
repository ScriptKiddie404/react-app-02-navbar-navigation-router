import React from 'react';

const About = ({ styleType, styleTitle }) => {
    return (
        <div className={styleType}>
            <h1 className={styleTitle}>About</h1>
        </div>
    );
}

export default About;