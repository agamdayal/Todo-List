import React, {useState} from 'react';

const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Fill the details");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setdesc("");
        }
    }

    let styling = {
        paddingTop: '5vh',
        paddingBottom: '3vh',
    }
    return (
        <div className="container">
        <h3 style = {styling}><b>Add Todo</b></h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlfor="exampleInputEmail1" className="form-label" >Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlfor="exampleInputPassword1" className="form-label" >Description</label>
                <input type="text" className="form-control" id="exampleInputPassword1" value={desc} onChange={(e) => setdesc(e.target.value)}/>
            </div>
            
            <button type="submit" className="btn btn-success btn-sm">Submit</button>
        </form>
        </div>
    );
};

export default AddTodo;