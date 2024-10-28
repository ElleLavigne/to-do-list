import { createContext, ReactNode, useEffect, useState } from "react"


interface ITask{
    id: number
    description: string
    cheked: boolean
}


interface TasksContextType{
tasks: ITask[]
}

interface TasksProviderProps{
    children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)


export function TasksProvider({ children }: TasksProviderProps){
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
        <TasksContext.Provider value={{tasks}}>
            {children}
        </TasksContext.Provider>
    )
}