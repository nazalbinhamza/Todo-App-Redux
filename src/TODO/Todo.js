import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,editTodo,updateTodo,deleteTodo } from './Reducer';
import { TbBookDownload } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoSaveSharp } from "react-icons/io5";
import "./Todo.css";
 
const Todo = () => {

    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [Todo,setTodo] = useState("");
    const updateitem = useRef(null);

    const addHandle = ()=>{
        if(Todo.length){
            dispatch(addTodo(Todo))
            setTodo("")
        }
    }

    const updateHandle = (Id) =>{
        if(updateitem.current.value.length > 0){
            dispatch(updateTodo({ id: Id, task: updateitem.current.value}))
        }
    }
    console.log(Todo)

  return (
    <div className='full-div' style={{ textAlign: "center" , paddingTop:"50px"}}>
        <h1 className="main-head" >TODO LIST</h1>
        <div className="add-task">
            <input type="text" value={Todo} onChange={(e)=> setTodo(e.target.value)} className="add-input" style={{width:"250px",background:'rgba(255,255,255,.4)'}}/>
            <button className="ButtonAdd" onClick={addHandle} style={{display:"flex"}}><TbBookDownload /></button>


        </div>
        <div className='all-todo'>
        <div style={{maxWidth: "900px",width:"100%"}}>
        {todo.map((Data)=>(
                        <div className="todo-list" style={{background:'rgba(255,255,255,.4)'}}>
                            {
                                Data.edit ?
                                <>
                                <input type="text" ref={updateitem} defaultValue={Data.task} className="add-input" style={{ width:"250px",background:'rgba(255,255,255,.4)'}} />
                                <div className="edit-div">
                                    <button onClick={()=> updateHandle(Data.id)} className="ButtonAdd"><IoSaveSharp /></button>
                                    <button onClick={() => dispatch(deleteTodo(Data.id))} className='ButtonAdd'><RiDeleteBinLine /></button>
                                </div>                                  
                                </> :<>
                                <h6 className='m-0' style={{ overflow: 'hidden' }}>{Data.task}</h6>
        
                                <div className='edit-div'>
                                    <button onClick={() => dispatch(editTodo(Data.id))} className='ButtonAdd'><FiEdit /></button>
                                    <button onClick={() => dispatch(deleteTodo(Data.id))} className='ButtonAdd'><RiDeleteBinLine /></button>

                                </div>
                                
                                </>
                            }
                            </div>
                    ))}
          </div>
        </div>

    
    
    
    
    </div>
  )
}

export default Todo