import React, {useState} from 'react';
import {TaskType, Todo} from "./Todo";
import {v1} from "uuid";


function App() {

    // Локальный Стейт тасок
    const [task, setTask] = useState<Array<TaskType>>([])

    // Функция удаление таски метедом фильтр
    const removeTasks = (taskID: string) => {
        const newTasksList = task.filter(task => task.id !== taskID)
        setTask(newTasksList)
    }

    // Функция добавление таски
    const addTask = (taskTitle: string) => {
        let newTask: TaskType = {id: v1(), title: taskTitle, isDone: false};
        setTask([newTask, ...task])
    }

    return (
        <div>
            <Todo
                title={'My Travel List'}
                tasks={task}
                removeTask={removeTasks}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
