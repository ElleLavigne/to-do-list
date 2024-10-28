
import { useContext } from "react";
import { Task } from "../Task";
import { TasksContainer } from "./styles";
import { TasksContext } from "../../../contexts/TasksContext";


export function TasksList() {
   const {tasks} = useContext(TasksContext)

    return(
        <TasksContainer>
            {tasks.map((task) => {
                return <Task description={task.description} key={task.id}/>
            })}
          
        </TasksContainer>
    )
}