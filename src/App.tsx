import React from 'react';
import './App.css';
import ToDo from "./ToDo";
// C
// R
// U
// D
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    //BLL:
    const todoListTitle_1:string ="What to learn"
    const todoListTitle_2:string ="What to buy"
    const tasks_1: Array<TaskType> =[
        {id:1, title: "HTML&CSS", isDone: true},
        {id:2, title: "JS/ES6", isDone: true},
        {id:3, title: "REACT", isDone: false},
    ]
    const tasks_2: Array<TaskType> =[
        {id:4, title: "Water", isDone: true},
        {id:5, title: "Milk", isDone: true},
        {id:6, title: "Beer", isDone: false},
    ]
    //UI:
    return (
        <div className="App">
            <ToDo title={todoListTitle_1} tasks={tasks_1}/>
            <ToDo title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
