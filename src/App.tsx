import React, {useState} from 'react';
import {TaskType, Todo} from "./Todo";
import {v1} from "uuid";
import {Grid, Paper} from "@material-ui/core";


function App() {
    // Локальный Стейт тасок
    const [tasks, setTask] = useState<Array<TaskType>>([])

    // Функция удаление таски метедом фильтр
    const removeTasks = (taskID: string) => {
        const newTasksList = tasks.filter(task => task.id !== taskID)
        setTask(newTasksList)
    }

    // Функция добавление таски, при условии длинны title больше или равно 1 и меньше или равное 5 символам
    const addTask = (taskTitle: string) => {
        let newTask: TaskType = {id: v1(), title: taskTitle, isDone: false};
        if (newTask.title.length >= 1 && newTask.title.length <= 5) setTask([newTask, ...tasks])

    }


    return (
        <Grid item >
            <Paper elevation={7} style={{margin: "auto" ,padding: "40px", width: "280px"}}>
            <Todo
                title={'TODO'}
                tasks={tasks}
                removeTask={removeTasks}
                addTask={addTask}
            />
            </Paper>
        </Grid>
    );
}

export default App;
