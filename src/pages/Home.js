import React from 'react';

const Home = ({ styleType, styleTitle }) => {
    return (
        <div className={styleType}>
            <h1 className={styleTitle}>Home</h1>
        </div>
    );
}

export default Home;