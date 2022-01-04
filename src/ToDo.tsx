import React from 'react';
import Button from "./Button";
import TodoListHeader from "./TodoListHeader";
import {TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType={
    title: string
    tasks: Array<TaskType>
}

const ToDo = (props:TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <Task key={props.tasks[0].id} {...props.tasks[0]}/>
                <Task key={props.tasks[1].id} {...props.tasks[1]}/>
                <Task key={props.tasks[2].id} {...props.tasks[2]}/>



            </ul>
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    );
};

export default ToDo;