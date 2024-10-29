// import { CheckIcon } from "@radix-ui/react-icons";
import { CheckBoxRoot, DeleteItemButton, Label, LeftContainer, TaskContainer } from "./styles";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { TasksContext } from "../../../contexts/TasksContext";


interface TaskProps{
  description: string
  id: number
  checked: boolean
}

export function Task(props: TaskProps) {
  const [isChecked, setIsChecked] = useState(props.checked);
  const {updateList, deleteTask} = useContext(TasksContext)
 


  return (
    <TaskContainer>
      <LeftContainer>
      <CheckBoxRoot
        checked={isChecked}
        id="c1"
        onCheckedChange={(newValue: boolean) => {
          setIsChecked(newValue);
          updateList(newValue, props.id)
        }}
      
      >
        <Checkbox.Indicator>
          <Check size={12} color="#F2F2F2" weight="bold"/>
        </Checkbox.Indicator>
      </CheckBoxRoot>


      <Label  checked={isChecked} htmlFor="c1">
        {props.description}
      </Label>
      </LeftContainer>
      <DeleteItemButton
      onClick={() => {
        deleteTask(props.id)
      }}
      >
      <Trash size={24} color="#808080"/>
      </DeleteItemButton>
    </TaskContainer>
  );
}
