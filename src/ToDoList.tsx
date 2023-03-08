import React, {FC} from "react";
import {filterValuesType, TaskType} from "./App";

type ToDoListPropsType = {
    title: string,
    tasks: TaskType[]
    removeTask: (taskId:number) => void,
    changeTodoListFilter: (filter: filterValuesType) => void
}


const ToDoList: FC<ToDoListPropsType> = (props) => {

    const todoListItems: Array<JSX.Element> = props.tasks.map(item => {
        return (
            <li><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span>
                <button onClick={() => {
                    props.removeTask(item.id);
                }}>
                    -
                </button>
            </li>
        );
    })

    return (<div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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
