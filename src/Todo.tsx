import React, {useState} from "react";
import {Delete} from "@material-ui/icons";
import {Button, IconButton, TextField} from "@material-ui/core";

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
                color="secondary"
                onClick={addTask}>ADD</Button>
        </div>

        <ul>
            {/*Мапом создаем новый массив тасок и возвращием в виде title и кнопки удалить*/}
            {
                props.tasks.map(t => {

                     const onChangeTaskStatus = (event: React.MouseEvent<HTMLSpanElement>) => {
                         if (event.currentTarget.id) {
                             return console.log(t.isDone, "Status Changed")
                         }
                     }

                    const onClickRemoveTask = () => {
                        props.removeTask(t.id)
                    }

                    return <div key={t.id}>
                        <div>
                            {/* <input type="checkbox" className="custom-control-input" id={t.title}/>
                            <label className="custom-control-label" htmlFor={t.title}>{t.title}</label>*/}
                            {/*<input type="checkbox"/>
                            <span className="form-check-label" id={t.title}
                                  onClick={onChangeTaskStatus}>{t.title}</span>*/}
                            <input type="checkbox" id={t.title}/><label htmlFor={t.title}>
                            {t.title} </label>

                            {/*<Button className="btn btn-outline-danger btn-sm" type="button"
                                    onClick={onClickRemoveTask}
                            >X
                            </Button>*/}
                            <IconButton onClick={onClickRemoveTask}>
                                <Delete/>
                            </IconButton>
                        </div>
                    </div>
                })
            }
        </ul>
    </div>


}