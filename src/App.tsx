import React, {useState} from 'react';
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
export type FilterValuesType = "All"| "Active"| "Completed"

function App() {
    //BLL:
    const todoListTitle:string ="What to learn"
    // let tasks: Array<TaskType> =[
    //     {id:1, title: "HTML&CSS", isDone: true},
    //     {id:2, title: "JS/ES6", isDone: true},
    //     {id:3, title: "REACT", isDone: true}
    // ]

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id:1, title: "HTML&CSS", isDone: true}, // completed
        {id:2, title: "JS/ES6", isDone: true},  // completed
        {id:3, title: "REACT", isDone: false}, //active
    ])
    const removeTask =(taskID:number) => {
        const filteredTasks = tasks.filter(t=>t.id!==taskID)
        setTasks(filteredTasks)
    }

    const [filter, setFilter] = useState<FilterValuesType>("All")
    const changeFilter = (filter:FilterValuesType) => {
        setFilter(filter)
    }
    const getTasksForRender = () => {
      switch(filter){
          case "Active":
              return tasks.filter(t=> !t.isDone)
          case "Completed":
              return tasks.filter(t=> t.isDone)
          default:
              return tasks
      }
    }
    const tasksForRender = getTasksForRender()
    //UI:
    return (
        <div className="App">
            <ToDo title={todoListTitle} tasks={tasksForRender} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
