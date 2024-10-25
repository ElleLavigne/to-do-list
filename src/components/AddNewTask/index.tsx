import { PlusCircle } from "phosphor-react";

import { CreateNewTaskButton, AddNewTaskContainer } from "./styles";

export function AddNewTask() {
    return(
        <AddNewTaskContainer>
            <input 
            type="text" 
            placeholder="Adicione uma nova tarefa" />
           <CreateNewTaskButton type="submit"> 
            Criar 
            <PlusCircle size={16} color="#F2F2F2"/>
            </CreateNewTaskButton>  

        </AddNewTaskContainer>
    )
}