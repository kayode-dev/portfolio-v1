import React from 'react';
import Intro from './Intro';
import Doings from './Doings';
const Home = () => {

    return (
        <div className='px-6'>
            <Intro/>
            <Doings/>
        </div>
    );
}

export default Home;