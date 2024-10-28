import { PlusCircle } from "phosphor-react";

import { CreateNewTaskButton, AddNewTaskContainer } from "./styles";
import { useContext, useState } from "react";
import { TasksContext } from "../../contexts/TasksContext";

export function AddNewTask() {
    const {createTask} = useContext(TasksContext)

    const [description, setDescription] = useState('')

    return(
        <AddNewTaskContainer 
        onSubmit={(event) => {
            event.preventDefault()
            createTask({description})
        }}
        >
            
            <input 
            value={description}
            onChange={(event) => {
                setDescription(event.target.value)
            }}
            type="text" 
            placeholder="Adicione uma nova tarefa" />
           <CreateNewTaskButton 
           type="submit"  
           > 
            Criar 
            <PlusCircle size={16} color="#F2F2F2"/>
            </CreateNewTaskButton>  
        </AddNewTaskContainer>
    )
}