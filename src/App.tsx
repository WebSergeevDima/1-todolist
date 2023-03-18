import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import {v1} from "uuid";

export type TaskType = {
  id: string
  title: string
  isDone: boolean
};

export type filterValuesType = 'all'|'active'|'completed';

function App(): JSX.Element {

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML & CSS", isDone: true},
        {id: v1(), title: "CSS & SCSS", isDone: true},
        {id: v1(), title: "ES6/TS", isDone: false},
    ]);

    const [filter, setFilter] = useState<filterValuesType>('all');

    const changeTodoListFilter = (filter: filterValuesType) => {
        setFilter(filter);
    }

    let tasksForRender: Array<TaskType> = [];

    if(filter === 'all') {
        tasksForRender = tasks;
    }

    if(filter === 'active') {
        tasksForRender = tasks.filter(item => {
            return item.isDone === false;
        });
    }

    if(filter === 'completed') {
        tasksForRender = tasks.filter(item => {
            return item.isDone === true;
        });
    }

    const addTask = (title: string) => {
        let task = {id: v1(), title: title, isDone: false };
        setTasks([task, ...tasks]);
    }

    const removeTask = (taskId:string) => {
        setTasks(tasks.filter(item => {
            return item.id !== taskId;
        }));
    };


    return (
        <div className="App">
            <ToDoList title={"Привет 1"} tasks={tasksForRender} addTask={addTask}  removeTask={removeTask} changeTodoListFilter={changeTodoListFilter}/>
            {/*<ToDoList title={"Привет 2"}/>*/}
            {/*<ToDoList title={"Привет 3"}/>*/}
        </div>
    );
}

export default App;
