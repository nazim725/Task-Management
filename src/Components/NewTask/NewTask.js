import React from 'react';
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
        <div>
            {tasks.filter(task => task.status === 'complete').map(taskItem => <Task key={taskItem._id} task={taskItem}></Task>)}

        </div>
        
    );
};

export default NewTask;