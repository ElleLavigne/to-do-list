// import { CheckIcon } from "@radix-ui/react-icons";
import { CheckBoxRoot, Label, TaskContainer } from "./styles";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { useState } from "react";

export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TaskContainer>
      <CheckBoxRoot
        checked={isChecked}
        id="c1"
        onCheckedChange={(newValue: boolean) => {
          setIsChecked(newValue);
        }}
      >
        <Checkbox.Indicator>
          <Check size={12} color="#F2F2F2" weight="bold"/>
          {/* <CheckIcon color="#F2F2F2"/> */}
        </Checkbox.Indicator>
      </CheckBoxRoot>

      <Label checked={isChecked} htmlFor="c1">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </Label>
    </TaskContainer>
  );
}
