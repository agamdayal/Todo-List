import React from 'react';
import TodoItem from './TodoItem';
const Todos = (props) => {

    let styles = {
        minHeight: "50vh"
    }

    let styling = {
        paddingTop: '90px',
        paddingBottom: '20px',
    }
    return(
        <div className='container my-3' style={styles}>
            <h3 style={styling}><b>Todos List</b></h3>
            {props.todos.length===0 ? "NO TODOS TO DISPLAY" :
            props.todos.map((todo) => {
                return(
                    <>
                    <TodoItem todo = {todo} onDelete={props.onDelete}/> <hr />
                    </>
                )  
            })
        }
        </div>
    );
};

export default Todos;