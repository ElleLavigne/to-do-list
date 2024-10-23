import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { TasksList } from "../components/TasksList";

import { HomeContainer, HomeContent } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <Header/>
            <HomeContent>
            <SearchBar/>
            <TasksList/>
            </HomeContent>
        </HomeContainer>
    )
}