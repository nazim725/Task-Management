import * as React from 'react';

const Task = ({ task,setTasks,tasks }) => {
    const { _id, title, description, date } = task
    const [complete, setComplete] = React.useState(false)
    const [status, setStatus] = React.useState('');
    const handleChangedStatus = id => {
        const url = `http://localhost:5000/tasks/${_id}`
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

    // const toggoleCheckBox = e => {
    //     setComplete(e.target.checked)
    // }
    return (
        <div>
            <span>{title}</span> <span>{description}</span> <span>{date}</span>
            {/* <input onChange={toggoleCheckBox} type="checkbox" name="" id="" /> */}
            <select className="button" onChange={e => setStatus(e.target.value)}>
                <option value="Select" disabled selected>Select Status</option>
                <option value="complete">Complete</option>
                <option value="notComplete">not Complete</option>
                <option value="Rejected">Rejected</option>
            </select>

            <button onClick={() => handleChangedStatus(_id)}>Send to Complete</button>





        </div>
    );
};

export default Task;