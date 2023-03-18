import React, {ChangeEvent,KeyboardEvent, FC, useState} from "react";
import {filterValuesType, TaskType} from "./App";

type ToDoListPropsType = {
    title: string,
    tasks: TaskType[]
    removeTask: (taskId:string) => void,
    changeTodoListFilter: (filter: filterValuesType) => void
    addTask: (title: string) => void
}


const ToDoList: FC<ToDoListPropsType> = (props) => {

    let [title, setTitle] = useState('');



    const todoListItems: Array<JSX.Element> = props.tasks.map(item => {

        const removeTaskHandler = () => {
            props.removeTask(item.id);
        };

        return (
            <li><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span>
                <button onClick={removeTaskHandler}>
                    -
                </button>
            </li>
        );
    })

    const addTask = () => {
        props.addTask(title);
        setTitle('');
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value);

    const onkeypressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addTask();
        }
    };

    return (<div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHandler} onKeyPress={onkeypressHandler} />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {todoListItems}
            </ul>
            <div>
                <button onClick={() => props.changeTodoListFilter('all')}>All</button>
                <button onClick={() => props.changeTodoListFilter('active')}>Active</button>
                <button onClick={() => props.changeTodoListFilter('completed')}>Completed</button>
            </div>
        </div>
    );
}

export default ToDoList;
