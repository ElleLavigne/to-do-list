
import { useEffect, useState } from "react";
import { Task } from "../Task";
import { TasksContainer } from "./styles";

interface ITask{
    id: number
    description: string
    cheked: boolean
}

export function TasksList() {
    const [tasks, setTasks] = useState<ITask[]>([])
    async function loadTasks(){
        const response = await fetch('http://localhost:3000/tasks')
        const data = await response.json()
        setTasks(data)
    }
    useEffect(() => {
        loadTasks()
    }, [])

    return(
        <TasksContainer>
            {tasks.map((task) => {
                return <Task description={task.description} key={task.id}/>
            })}
          
        </TasksContainer>
    )
}