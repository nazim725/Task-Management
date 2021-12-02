import React from 'react';

import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div>
           <h1 > <Typewriter
                options={{
                    strings: ['Task management system'],
                    autoStart: true,
                    loop: true,
                }}
            /></h1>

        </div>
    );
};

export default Home;