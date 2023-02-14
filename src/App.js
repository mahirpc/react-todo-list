import React from 'react';
import { useState } from 'react';
import './App.css';
import TodoDone from './components/TodoDone';

function App() {
  let jsonGetted = localStorage.getItem("jsonString")
  let jsonParsed = JSON.parse(jsonGetted)
  const [toDos,setTodos] = useState(()=>{
    if(jsonParsed !== null){
      return jsonParsed
    }
    else{
      return ([])
    }
  })
  const [toDo,setTodo] = useState('')
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 className='dayHeading' >Whoop, it's {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()]} 🌝</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now() , text:toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value,index)=>{
            return (
              <div className="todo" key={index}>
                <div className="left">
                  <input onChange={(event)=>{
                    setTodos(toDos.filter(value1 =>{
                      if(value1.id === value.id){
                        value1.status = event.target.checked
                      }
                      return value1
                    }))
                  }} value={value.status} checked={value.status} type="checkbox" name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i onClick={(event)=>{
                      setTodos(toDos.filter(value1 => "deleteIcon"+String(value1.id) !== event.target.getAttribute("name") ))
                      }} name={"deleteIcon"+String(value.id)} className="fas fa-times">
                  </i>
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        {
          toDos.map((toDo,index)=>{
            return(
              <TodoDone key={index} {...toDo}/>
            )
          })
          
        }
        {
          console.log(toDos)
        }
      </div>
      <div>
        <button onClick={()=>{
          let jsonString = JSON.stringify(toDos)
          localStorage.setItem("jsonString", jsonString)
        }}>Save</button>
      </div>
    </div>
  );
}

export default App;