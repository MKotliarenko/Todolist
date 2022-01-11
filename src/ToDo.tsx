import React from 'react';
import Button from "./Button";
import TodoListHeader from "./TodoListHeader";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";
import task from "./Task";

type TodoListPropsType={
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:number)=>void
    changeFilter: (filter:FilterValuesType) =>void
}

const ToDo = (props:TodoListPropsType) => {
    const tasksComponents = props.tasks.map(t=> <Task key={t.id} {...t} removeTask={props.removeTask}/>)
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksComponents}
            </ul>
            <div>
                <Button title={"All"}
                        onClickHandler ={()=> props.changeFilter("All")}/>
                <Button title={"Active"}
                        onClickHandler ={()=> props.changeFilter("Active")}/>
                <Button title={"Completed"}
                        onClickHandler ={()=> props.changeFilter("Completed")}/>
            </div>
        </div>
    );
};

export default ToDo;