import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Task from '../Task/Task';
import Zoom from 'react-reveal/Zoom';

const InprogressTask = () => {
    const [tasks, setTasks] = useState([])
    const [status, setStatus] = React.useState('');
    useEffect(() => {
        fetch('https://fierce-anchorage-33824.herokuapp.com/subTasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
                console.log(data)

            })
    }, [])


    const handleChangedStatus = id => {
        const url = `https://fierce-anchorage-33824.herokuapp.com/subTasks/${id}`
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

    const handleDeleteTask = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://fierce-anchorage-33824.herokuapp.com/subTasks/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingTask = tasks.filter(task => task._id !== id);
                        setTasks(remainingTask);
                    }
                });
        }
    }
    return (
        <Zoom>
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
                            <th>SubTask</th>
                            <th>Action</th>
                            <th>Delete Task</th>


                        </tr>
                    </thead>
                    <tbody>
                        {tasks.filter(task => task.status !== 'complete').map(taskItem =>
                            <tr>
                                <td className='text-info text-center'>{taskItem.title}</td>
                                <td className='text-info text-center'>{taskItem.description}</td>
                                <td className='text-info text-center'>{taskItem.date}</td>
                                <td className='text-info text-center'>{taskItem.subTask}</td>
                                <td className='text-info text-center'>
                                    <select className="bg-success text-light" style={{ height: '35px', borderRadius: '5px', paddingBottom: '5px' }} onChange={e => setStatus(e.target.value)}>
                                        <option className='text-white' value="Select" disabled selected>Select Status</option>
                                        <option value="complete">Complete</option>
                                        <option value="notCompleted">not Complete</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>

                                    <button className='btn btn-success ms-3' onClick={() => handleChangedStatus(taskItem._id)}>Send to Complete</button>
                                </td>

                                <td> <button className="btn btn-danger" onClick={() => handleDeleteTask(taskItem._id)}>Delete Task</button></td>



                            </tr>)}
                    </tbody>
                </Table>



            </div>
        </Zoom>
    );
};

export default InprogressTask;