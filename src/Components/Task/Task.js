import * as React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Task = () => {
    const { taskId } = useParams()
    const titleRef = React.useRef();
    const descriptionRef = React.useRef();
    const dateRef = React.useRef();
    const subTaskRef = React.useRef();
    const employeeNameRef = React.useRef();


    const [task, setTask] = React.useState({});
    const url = `https://fierce-anchorage-33824.herokuapp.com/tasks/${taskId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [taskId])

    const handleAddSubtask = e => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const date = dateRef.current.value;
        const subTask = subTaskRef.current.value;
        const employeeName = employeeNameRef.current.value;
       
        const newTask = { title, description, date, subTask, employeeName}
        fetch('https://fierce-anchorage-33824.herokuapp.com/subTasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Saved')
                    e.target.reset();
                }
            })




        e.preventDefault();
    }




    return (
        <div> <Form className='w-50 mx-auto' onSubmit={handleAddSubtask}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className='text-warning'>Task Title</Form.Label>
                    <Form.Control ref={titleRef} className='input-box text-light' value={task.title} />

                </Form.Group>
            </Row>
            <Row>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label  className='text-warning'>Task Description</Form.Label>
                    <Form.Control ref={descriptionRef} className='input-box text-light' value={task.description} />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label  className='text-warning'>Task assign date</Form.Label>
                    <Form.Control ref={dateRef} className='input-box text-light' value={task.date} />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className='text-warning'>Assign Subtask</Form.Label>
                    <Form.Control ref={subTaskRef} className='input-box text-light' placeholder='Enter Subtask' />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className='text-warning'>Employee's Name</Form.Label>
                    <Form.Control ref={employeeNameRef} className='input-box text-light' placeholder="Employee's Name" />
                </Form.Group>
            </Row>


            <Button variant="success" type="submit">
                Assign Task
            </Button>
        </Form>






        </div>
    );
};

export default Task;