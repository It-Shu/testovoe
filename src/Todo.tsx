import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

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

    // Локальный Стейт названия тасок
    const [taskTitle, setTaskTitle] = useState('')

    // Функция сохранения title  из инпута в Локальный Стейт
    const onChangeTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }
    // Функция добавление таски и затирание инпута после добавления
    const addTask = () => {
        props.addTask(taskTitle)
        setTaskTitle('')
    }
    // Функция добавления таски с помощью клавиши Enter
    const onKeyPressAddTask = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") addTask()
    }

    return <div>
        <div>
            <h1>{props.title}</h1>

            <input className="col-form-label-sm"
                   placeholder={'task title'}
                   value={taskTitle}
                   onChange={onChangeTaskTitle}
                   onKeyPress={onKeyPressAddTask}
            />

            <Button
                className="btn btn-outline-success" type="button"
                onClick={addTask}>ADD</Button>
        </div>
        <ul>
            {/*Мапом создаем новый массив тасок и возвращием в виде title и кнопки удалить*/}
            {
                props.tasks.map(t => {
                    return <li key={t.id}>
                    <span onClick={() => {
                        // props.changeTaskStatus(t.isDone)
                    }
                    }>{t.title}</span>
                        <Button className="btn btn-outline-danger btn-sm" type="button"
                                onClick={() => {
                                    props.removeTask(t.id)
                                }
                                }>X
                        </Button>
                    </li>
                })
            }
        </ul>
    </div>


}