import { CheckIcon } from "@radix-ui/react-icons";
import { CheckBoxRoot, TaskContainer } from "./styles";
import * as Checkbox from "@radix-ui/react-checkbox";


export function Task() {
    return(
        <TaskContainer>
            <CheckBoxRoot className="CheckboxRoot" id="c1">
				<Checkbox.Indicator className="CheckboxIndicator">
					<CheckIcon />
				</Checkbox.Indicator>
			</CheckBoxRoot>

			<label className="Label" htmlFor="c1">
				Accept terms and conditions.
			</label>

        </TaskContainer>
    )
}