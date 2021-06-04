import React, {ChangeEvent, useState, KeyboardEvent} from "react";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    addTask: (taskTitle: string) => void
}

export const Todo = (props: TodoPropsType) => {

    const [taskTitle, setTaskTitle] = useState('')

    const onChangeTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const addTask = () => {
        props.addTask(taskTitle)
        setTaskTitle('')
    }

    const onKeyPressAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") addTask()
    }

    return <div>
        <h1>{props.title}</h1>

        <input
            placeholder={'enter some text'}
            value={taskTitle}
            onChange={onChangeTaskTitle}
            onKeyPress={onKeyPressAddTask}
        />

        <button onClick={addTask}>+</button>
        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id}>
                    <span onClick={() => {
                        // props.changeTaskStatus(t.isDone)
                    }
                    }>{t.title}</span>
                        <button onClick={() => {
                            props.removeTask(t.id)
                        }
                        }>X
                        </button>
                    </li>
                })
            }
        </ul>
    </div>


}