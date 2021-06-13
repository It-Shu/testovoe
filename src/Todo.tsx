import React, {useState} from "react";
import {Delete} from "@material-ui/icons";
import {Button, Checkbox, IconButton, TextField} from "@material-ui/core";

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
    const onChangeTaskTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
            setTaskTitle(event.currentTarget.value)
    }

    // Функция добавление таски без пробелов и затирание инпута после добавления
    const addTask = () => {
        if (taskTitle.trim() !== '') {
            props.addTask(taskTitle.trim())
            setTaskTitle('')
        }
    }

    // Функция добавления таски с помощью клавиши Enter
    const onKeyPressAddTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") addTask()
    }


    return <div>

        <h1>{props.title}</h1>
        <div>
            <TextField
                type="text"
                placeholder={'task title'}
                value={taskTitle}
                onChange={onChangeTaskTitle}
                onKeyPress={onKeyPressAddTask}
            />

            <Button
                type="button"
                color="primary"
                onClick={addTask}>ADD</Button>
        </div>

        <ul>
            {/*Мапом создаем новый массив тасок и возвращием в виде title и кнопки удалить*/}
            {
                props.tasks.map(t => {

                    const onClickRemoveTask = () => {
                        props.removeTask(t.id)
                    }

                    return <div key={t.id}>
                        <div>

                            <Checkbox
                                color="primary"
                                id={t.id}
                            /><label htmlFor={t.id}>{t.title}</label>

                            <IconButton onClick={onClickRemoveTask}>
                                <Delete color="secondary"/>
                            </IconButton>
                        </div>
                    </div>
                })
            }
        </ul>
    </div>


}