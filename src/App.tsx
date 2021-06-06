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

    // Функция добавление таски, при условии длинны title больше или равно 1 и меньше или равное 5 символам
    const addTask = (taskTitle: string) => {
        let newTask: TaskType = {id: v1(), title: taskTitle, isDone: false};
        if (newTask.title.length >= 1 && newTask.title.length <= 5) setTask([newTask, ...task])

    }

    return (
        <div>
            <Todo
                title={'TODO'}
                tasks={task}
                removeTask={removeTasks}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
