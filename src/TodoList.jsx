import React from 'react'

function TodoList(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default TodoList




//app.jsx code 

// import React, { useState } from 'react'
// import "./App.css"
// import TodoInput from './TodoInput'
// import Todolist from './TodoList';
// function App() {
//   const [listTodo,setListTodo]=useState([]);
//   let addList = (inputText)=>{
//     if(inputText!=='')
//       setListTodo([...listTodo,inputText]); //adding the eneterd element into the array using spread
//   }
//   const deleteListItem = (key)=>{
//     let newListTodo = [...listTodo];
//     newListTodo.splice(key,1)
//     setListTodo([...newListTodo])
//   }
//   return (
//     <div className="main-container">
//       <div className="center-container">
//         <TodoInput addList={addList}/>
//         <h1 className="app-heading">TODO</h1>
//         <hr/>
//         {listTodo.map((listItem,i)=>{
//           return (
//             <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default App