import { PlusCircle } from "phosphor-react";
import { SearchBarContainer } from "./styles";

export function SearchBar() {
    return(
        <SearchBarContainer>
            <input 
            type="text" 
            placeholder="Adicione uma nova tarefa" />

            <button type="submit">
                Criar
                <PlusCircle size={16} color="#F2F2F2"/>
            </button>
        </SearchBarContainer>
    )
}