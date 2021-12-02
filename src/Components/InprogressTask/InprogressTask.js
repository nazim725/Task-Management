import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Task from '../Task/Task';

const InprogressTask = () => {
    const [tasks, setTasks] = useState([])
    const [status, setStatus] = React.useState('');
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
                console.log(data)

            })
    }, [])


    const handleChangedStatus = id => {
        const url = `http://localhost:5000/tasks/${id}`
        // console.log(id)
        console.log(url)
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Update successful")
                    const remainingTask = tasks.filter(st => st._id !== id);
                    setTasks(remainingTask);

                }


            })

    }
    return (
        <div className='pt-5'>
            <h1 className='text-center text-info mb-4'>Inprogress Tasks</h1>
            <div>
                {/* {
                    tasks.map(task => <Task key={task._id} task={task}></Task>)
                } */}
                {/* {tasks.filter(task => task.status !== 'complete').map(taskItem => <Task key={taskItem._id}
                    setTasks={setTasks} tasks={tasks} task={taskItem}></Task>)} */}
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className='text-warning text-center'>

                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {tasks.filter(task => task.status !== 'complete').map(taskItem =>
                        <tr>
                            <td className='text-info text-center'>{taskItem.title}</td>
                            <td className='text-info text-center'>{taskItem.description}</td>
                            <td className='text-info text-center'>{taskItem.date}</td>
                            <td className='text-info text-center'>
                                <select className="bg-success text-light" style={{ height: '35px', borderRadius: '5px', paddingBottom: '5px' }} onChange={e => setStatus(e.target.value)}>
                                    <option className='text-white' value="Select" disabled selected>Select Status</option>
                                    <option value="completed">Complete</option>
                                    <option value="notCompleted">not Complete</option>
                                    <option value="Rejected">Rejected</option>
                                </select>

                                <button className='btn btn-success ms-3' onClick={() => handleChangedStatus(taskItem._id)}>Send to Complete</button>
                            </td>



                        </tr>)}
                </tbody>
            </Table>



        </div>
    );
};

export default InprogressTask;