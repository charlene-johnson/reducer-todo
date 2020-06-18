import React from 'react';


const Todo = props => {
    return(
        <>
        <div onClick={()=> props.toggleTask(props.todo.id)} className={`todo${props.todo.completed ? ' completed' : ''}`}>
            <p>{props.todo.item}</p>
        </div>
         {props.todo.timeCompleted &&(<p style={{textDecoration: "none"}}>Task Completed on {props.todo.timeCompleted}</p>)}
        </>
    );
};

export default Todo;