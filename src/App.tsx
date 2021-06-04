import React, {useState} from 'react';
import {TaskType, Todo} from "./Todo";
import {v1} from "uuid";


function App() {

    const [task, setTask] = useState<Array<TaskType>>([])

    const removeTasks = (taskID: string) => {
        const newTasksList = task.filter(task => task.id !== taskID)
        setTask(newTasksList)
    }

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
