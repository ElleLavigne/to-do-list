import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios"


interface ITask{
    id: number
    description: string
    cheked: boolean
}

interface CreateTask{
description: string


}


interface TasksContextType{
tasks: ITask[]
createTask: (data:CreateTask) => Promise<void>

}

interface TasksProviderProps{
    children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)


export function TasksProvider({ children }: TasksProviderProps){
    const [tasks, setTasks] = useState<ITask[]>([])
    
    async function loadTasks(){
        const response = await api.get<ITask[]>('/tasks')
        setTasks(response.data)
    }
    useEffect(() => {
        loadTasks()
    }, [])


    async function createTask(data: CreateTask ){

    const response = await api.post('tasks', {
        description: data.description,
        cheked: false
    })
    setTasks([...tasks, response.data])
    

    }
    return(
        <TasksContext.Provider value={
            {
                tasks, 
                createTask
            }
            }>
            {children}
        </TasksContext.Provider>
    )
}