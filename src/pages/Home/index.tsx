import { Header } from "../../components/Header";
import { AddNewTask } from "../../components/AddNewTask";
import { TasksList } from "../components/TasksList";

import { HomeContainer, HomeContent } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <Header/>
            <HomeContent>
            <AddNewTask/>
            <TasksList/>
            </HomeContent>
        </HomeContainer>
    )
}