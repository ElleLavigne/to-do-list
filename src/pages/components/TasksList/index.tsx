
import { useContext } from "react";
import { Task } from "../Task";
import { CompletedTasks, CreatedTasks, Headline, TasksContainer } from "./styles";
import { TasksContext } from "../../../contexts/TasksContext";


export function TasksList() {
   const {tasks} = useContext(TasksContext)

    return(
        <TasksContainer>
            <Headline>
                <CreatedTasks>
                <p>Tarefas criadas</p>
                <span>5</span>
                </CreatedTasks>
                <CompletedTasks>
                    <p>Concluídas</p>
                    <span>2 de 5</span>
                </CompletedTasks>
               
            </Headline>
            {tasks.map((task) => {
                return <Task description={task.description} key={task.id}/>
            })}
          
        </TasksContainer>
    )
}