import React, {useState} from "react";
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
    const onChangeTaskTitle = (event: React.ChangeEvent<HTMLInputElement>/*ChangeEvent<HTMLInputElement>*/) => {
        setTaskTitle(event.currentTarget.value)
    }
    // Функция добавление таски и затирание инпута после добавления
    const addTask = () => {
        props.addTask(taskTitle)
        setTaskTitle('')
    }
    // Функция добавления таски с помощью клавиши Enter
    const onKeyPressAddTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") addTask()
    }

    return <div className='card-body w-50'>

        <h1>{props.title}</h1>
        <div className='input-group mb-2'>
            <input
                type="text"
                className="col-form-label -sm"
                placeholder={'task title'}
                value={taskTitle}
                onChange={onChangeTaskTitle}
                onKeyPress={onKeyPressAddTask}
            />

            <Button
                type="button" className="btn btn-outline-warning"
                onClick={addTask}>ADD</Button>
        </div>

        <ul>
            {/*Мапом создаем новый массив тасок и возвращием в виде title и кнопки удалить*/}
            {
                props.tasks.map(t => {
                    return <div key={t.id}>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id={t.title}/>
                            <label className="custom-control-label" htmlFor={t.title}>{t.title}</label>
                            {/* <span className="form-check-label"  onClick={() => {
                            // props.changeTaskStatus(t.isDone)
                        }
                        }>{t.title}</span>*/}

                            <Button className="btn btn-outline-danger btn-sm" type="button"
                                    onClick={() => {
                                        props.removeTask(t.id)
                                    }
                                    }>X
                            </Button>
                        </div>
                    </div>
                })
            }
        </ul>
    </div>


}