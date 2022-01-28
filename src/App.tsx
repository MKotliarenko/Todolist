import React, {useState} from 'react';
import './App.css';
import ToDo from "./ToDo";
import {v1} from 'uuid';
// C
// R
// U
// D
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = "All" | "Active" | "Completed"

function App() {
    console.log(v1())
    //BLL:
    const todoListTitle: string = "What to learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true}, // completed
        {id: v1(), title: "JS/ES6", isDone: true},  // completed
        {id: v1(), title: "REACT", isDone: false}, //active
    ])
    const removeTask = (taskID: string) => {
        const filteredTasks = tasks.filter(t => t.id !== taskID)
        setTasks(filteredTasks)
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {id: v1(), title, isDone: false}  // title:title = title
        const updatedTasks: Array<TaskType> = [newTask, ...tasks]
        setTasks(updatedTasks)
    }
    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskID ? {...t, isDone: isDone} : t))   // isDone  означает isDone: isDone. если имя одинаковое можно сократить

    }
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    const [filter, setFilter] = useState<FilterValuesType>("All")

    const getTasksForRender = () => {
        switch (filter) {
            case "Active":
                return tasks.filter(t => !t.isDone)
            case "Completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }
    const tasksForRender = getTasksForRender()
    //UI:
    return (
        <div className="App">
            <ToDo title={todoListTitle} tasks={tasksForRender} removeTask={removeTask} changeFilter={changeFilter}
                  addTask={addTask} changeTaskStatus={changeTaskStatus}filter={filter} />
        </div>
    );
}

export default App;
