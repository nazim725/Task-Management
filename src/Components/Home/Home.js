import React from 'react';

import Typewriter from 'typewriter-effect';
import AddTask from '../AddTask/AddTask';

const Home = () => {
    return (
        <div>

            <h3 className="text-secondary text-center mt-5"><span className='span-part'><Typewriter
                options={{
                    strings: ['Task Management System'],
                    autoStart: true,
                    loop: true,
                }}
            /></span></h3>

            <AddTask></AddTask>

        </div>
    );
};

export default Home;