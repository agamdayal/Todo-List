import React from 'react';

const TodoItem = (props) => {
    const del = () =>{
        props.onDelete(props.todo);
    }
    return (
        <div>
            <h5>{props.todo.title}</h5>
            <p>{props.todo.desc}</p>
            <button className='btn btn-sm btn-danger' onClick= {del}>Delete</button>
        </div>
    );
};

export default TodoItem;