
import { useContext } from "react";
import { Task } from "../Task";
import { CompletedTasks, CreatedTasks, Headline, TasksContainer } from "./styles";
import { TasksContext } from "../../../contexts/TasksContext";


export function TasksList() {
   const {tasks} = useContext(TasksContext)

    const completedTask = tasks.filter((item) => {
        return item.checked === true 
    })
    
    return(
        <TasksContainer>
            <Headline>
                <CreatedTasks>
                <p>Tarefas criadas</p>
                <span>{tasks.length}</span>
                </CreatedTasks>
                <CompletedTasks>
                    <p>Concluídas</p>
                    <span>{completedTask.length} de {tasks.length}</span>
                </CompletedTasks>
               
            </Headline>
            {tasks.map((task) => {
                return <Task checked={task.checked} id={task.id} description={task.description} key={task.id}/>
            })}
          
        </TasksContainer>
    )
}