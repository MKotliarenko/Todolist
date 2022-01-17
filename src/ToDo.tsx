import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import Button from "./Button";
import TodoListHeader from "./TodoListHeader";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

const ToDo = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const tasksComponents = props.tasks.map(t => <Task key={t.id} {...t} removeTask={props.removeTask}/>)
    const onClickAddTask = () => {
        props.addTask(title)
        setTitle("")
    }
    const onKeyPressAddTask = (e:KeyboardEvent<HTMLInputElement>)=>{
        e.key ==="Enter" && onClickAddTask()
    }
    const setAllFilter = () => props.changeFilter("All")
    const setActiveFilter = () => props.changeFilter("Active")
    const setCompletedFilter = () => props.changeFilter("Completed")
    const onChangeSetTitle = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)


    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetTitle}
                    onKeyPress={onKeyPressAddTask}
                />
                <button onClick={onClickAddTask}>+</button>
            </div>
            <ul>
                {tasksComponents}
            </ul>
            <div>
                <Button title={"All"}
                        onClickHandler={setAllFilter}/>
                <Button title={"Active"}
                        onClickHandler={setActiveFilter}/>
                <Button title={"Completed"}
                        onClickHandler={setCompletedFilter}/>
            </div>
        </div>
    );
};

export default ToDo;