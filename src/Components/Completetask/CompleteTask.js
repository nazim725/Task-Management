import React from 'react';
import { Table } from 'react-bootstrap';
import Task from '../Task/Task';
import Zoom from 'react-reveal/Zoom';

const CompleteTask = () => {
    const [tasks, setTasks] = React.useState([])

    React.useEffect(() => {
        const url = `https://fierce-anchorage-33824.herokuapp.com/subTasks`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTasks(data)
                console.log(data)
            });
    }, [])
    return (
        <Zoom>
            <div className='pt-5'>
                <h1 className='text-center text-info mb-4'>Completed Tasks</h1>
                <Table striped bordered hover size="sm" >
                    <thead >
                        <tr className='text-warning text-center'>

                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>subTask</th>
                            <th>Status</th>


                        </tr>
                    </thead>
                    <tbody>
                        {tasks.filter(task => task.status === 'complete').map(taskItem =>
                            <tr className="text-center">
                                <td className='text-info'>{taskItem.title}</td>
                                <td className='text-info'>{taskItem.description}</td>
                                <td className='text-info'>{taskItem.date}</td>
                                <td className='text-info'>{taskItem.subTask}</td>
                                <td className='text-info'>{taskItem.status}</td>




                            </tr>).slice((tasks.length - 10), tasks.length)}
                    </tbody>
                </Table>

            </div>
        </Zoom>

    );
};

export default CompleteTask;