import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
};

export type filterValuesType = 'all'|'active'|'completed';

function App(): JSX.Element {

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "CSS & SCSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
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


    const removeTask = (taskId:number) => {
        setTasks(tasks.filter(item => {
            return item.id !== taskId;
        }));

        console.log(tasks);
    };


    return (
        <div className="App">
            <ToDoList title={"Привет 1"} tasks={tasksForRender} removeTask={removeTask} changeTodoListFilter={changeTodoListFilter}/>
            {/*<ToDoList title={"Привет 2"}/>*/}
            {/*<ToDoList title={"Привет 3"}/>*/}
        </div>
    );
}

export default App;
