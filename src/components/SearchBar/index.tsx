import { PlusCircle } from "phosphor-react";

import { CreateNewTaskButton, SearchBarContainer } from "./styles";

export function SearchBar() {
    return(
        <SearchBarContainer>
            <input 
            type="text" 
            placeholder="Adicione uma nova tarefa" />




 
           <CreateNewTaskButton type="submit"> 
            Criar 
            <PlusCircle size={16} color="#F2F2F2"/>
            </CreateNewTaskButton>  


        </SearchBarContainer>
    )
}