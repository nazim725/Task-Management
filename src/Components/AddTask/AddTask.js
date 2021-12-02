
import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import './AddTask.css'

const AddTask = () => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const date = new Date()

    const handleAddtask = e => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const date = dateRef.current.value;
        const newTask = { title, description, date }
        console.log(newTask)
        fetch('https://fierce-anchorage-33824.herokuapp.com/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the task.')
                    e.target.reset();
                }
            })




        e.preventDefault();
    }
    return (
        <div className="">
            <h2 className="my-4 text-center text-info">Create Task</h2>
            <Form className="w-50 mx-auto" onSubmit={handleAddtask}>
                <Row className="">
                    <Col>
                        <Form.Control className="text-center mt-3 input-box text-secondary" ref={titleRef} placeholder="Task title" required />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingTextarea2" className="text-secondary " label="Description">
                            <Form.Control
                                className="text-center mt-3 input-box text-secondary text-center"
                                as="textarea"
                                ref={descriptionRef}
                                // placeholder="Description"
                                required
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="">
                    <Col>
                        <Form.Control className="text-center mt-3 input-box text-secondary" ref={dateRef} value={date.toLocaleDateString()} required />
                    </Col>
                </Row>
                <Row className="">
                    <Button className="mt-3" variant="primary" type="submit">
                        Create Task
                    </Button>
                </Row>
            </Form>
        </div>
    );
};

export default AddTask;