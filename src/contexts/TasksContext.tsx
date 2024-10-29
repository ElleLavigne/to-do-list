import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios"


export interface ITask{
    id: number
    description: string
    checked: boolean
}

interface CreateTask{
description: string

}
interface UpdateTask{
    description: string
    checked: boolean
}

interface TasksContextType{
tasks: ITask[]
createTask: (data:CreateTask) => Promise<void>
updateList: (newValue: boolean, id: number) => void
deleteTask: (id: number) => void

}

interface TasksProviderProps{
    children: ReactNode
}

//--------------------------------------------------


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

//-----------------------

   function updateList(newValue: boolean, id: number){
        const index = tasks.findIndex((item) => {
           return item.id === id
         })
         const updateTasks = [...tasks]
         const oldItem = tasks[index]
         const updateItem: ITask = {...oldItem, checked: newValue}
         
         updateTasks.splice(index, 1, updateItem) 
         setTasks(updateTasks)
         updateTask(id, {checked: newValue, description: updateItem.description})
       }
//-----------------------

    async function createTask(data: CreateTask ){

    const response = await api.post('tasks', {
        description: data.description,
        checked: false
    })
    setTasks([...tasks, response.data])
    
    }
//-----------------------

    async function updateTask(id: number, data: UpdateTask ){
        const response = await api.put(`tasks/${id}`, {
            checked: data.checked,
            description: data.description
        })
        
        }
//-----------------------
async function deleteTask(id: number ){
    const response = await api.delete(`tasks/${id}`)
    const index = tasks.findIndex((item) => {
        return item.id === id
      })
      const updateList = [...tasks]
      updateList.splice(index, 1)
      setTasks(updateList)
    }
    return(
        <TasksContext.Provider value={
            {
                tasks, 
                createTask,
                updateList,
                deleteTask
            }
            }>
            {children}
        </TasksContext.Provider>
    )
}