import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import Button from "./Button";
import TodoListHeader from "./TodoListHeader";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean)=>void
}

const ToDo = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const[error, setError] = useState<boolean>(false)
    const tasksComponents = props.tasks.map(t => <Task key={t.id} {...t} removeTask={props.removeTask } changeTaskStatus={props.changeTaskStatus}/>)

    const onClickAddTask = () => {
        const trimmedTitle =title.trim()
        if(trimmedTitle){ props.addTask(trimmedTitle)}
        else{setError(true)}
        setTitle("")
    }
    const onKeyPressAddTask = (e:KeyboardEvent<HTMLInputElement>)=>{
        e.key ==="Enter" && onClickAddTask()
    }
    const setAllFilter = () => props.changeFilter("All")
    const setActiveFilter = () => props.changeFilter("Active")
    const setCompletedFilter = () => props.changeFilter("Completed")
    const onChangeSetTitle = (e:ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)
        setError(false)}



    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetTitle}
                    onKeyPress={onKeyPressAddTask}
                    className={error ? "error" : ""}
                />
                <button onClick={onClickAddTask}>+</button>
                {error && <div style ={{color:"red"}}>Title is required</div>}
            </div>
            <ul>
                {tasksComponents}
            </ul>
            <div>
                <Button active={props.filter==="All"} title={"All"}
                        onClickHandler={setAllFilter}/>
                <Button active={props.filter==="Active"} title={"Active"}
                        onClickHandler={setActiveFilter}/>
                <Button active={props.filter==="Completed"} title={"Completed"}
                        onClickHandler={setCompletedFilter}/>
            </div>
        </div>
    );
};

export default ToDo;