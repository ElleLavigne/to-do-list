import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios"


export interface ITask{
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
updateList: (newValue: boolean, id: number) => void

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


   function updateList(newValue: boolean, id: number){
        const index = tasks.findIndex((item) => {
           return item.id === id
         })
         const updateTasks = [...tasks]
         const oldItem = tasks[index]
         const updateItem: ITask = {...oldItem, cheked: newValue}
         
         updateTasks.splice(index, 1, updateItem) 
         setTasks(updateTasks)
       }

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
                createTask,
                updateList
            }
            }>
            {children}
        </TasksContext.Provider>
    )
}