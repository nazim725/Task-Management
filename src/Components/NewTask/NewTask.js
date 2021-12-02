import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Task from '../Task/Task';

const NewTask = () => {
    const [tasks, setTasks] = React.useState([])
    React.useEffect(() => {
        const url = `https://fierce-anchorage-33824.herokuapp.com/tasks`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTasks(data)
                console.log(data)
            });
    }, [])
   
    return (
        <div className='mx-auto'>
            <h1 className='text-center text-info my-4'>Assign New Task</h1>
            <Dropdown className='text-center'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Assign New Task
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {tasks.map(taskItem =>
                     <Link style={{textDecoration:'none',color:'blue'}} to={`/task/${taskItem._id}`}> <Dropdown.Item style={{color:'blue',backgroundColor:'gray', marginTop:'2px'}} href="#/action-1">{taskItem.title}</Dropdown.Item></Link>)
                    }
                    
                </Dropdown.Menu>
            </Dropdown>


        </div>

    );
};

export default NewTask;