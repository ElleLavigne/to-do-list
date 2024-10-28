// import { CheckIcon } from "@radix-ui/react-icons";
import { CheckBoxRoot, Label, LeftContainer, TaskContainer } from "./styles";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { useState } from "react";


interface TaskProps{
  description: string
}

export function Task(props: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TaskContainer>
      <LeftContainer>
      <CheckBoxRoot
        checked={isChecked}
        id="c1"
        onCheckedChange={(newValue: boolean) => {
          setIsChecked(newValue);
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
      <Trash size={24} color="#808080"/>
    </TaskContainer>
  );
}
