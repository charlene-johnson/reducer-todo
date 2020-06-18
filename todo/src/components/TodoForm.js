import React, {useState} from "react";


export default function TodoForm(props) {
const [task, setTask] = useState('')

const handleChanges = e => {
    setTask(e.target.value);
};
const submitTask = e => {
    e.preventDefault();
    
     props.addTask(e, task);
    setTask('')
    };
    return (
        <div>
            <form onSubmit={submitTask}>
                <input
                    type="text"
                    value={task}
                    name="task"
                    placeholder="Add Task"
                    onChange={handleChanges}/>
                <button>Add Todo</button>
                <button className="clear-completed" onClick={props.clearCompleted}>Clear Completed</button>
            </form> 
        </div>
    )
}
