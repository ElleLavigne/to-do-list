import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

interface LabelProps {
  checked: boolean;
}

export const TaskContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${props => props.theme["gray-500"]};
  border: 1px solid ${props => props.theme["gray-400"]};
  border-radius: 8px;


`;
export const LeftContainer = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;

`

export const Label = styled.label<LabelProps>`
 color: ${(props) => props.checked ? props.theme["gray-300"] : props.theme["gray-100"]};
 transition: all 250ms;
 text-decoration: ${props => props.checked ? 'line-through' : undefined};

`
export const CheckBoxRoot = styled(Checkbox.Root)`
  background-color: ${(props) =>
    props.checked ? props.theme.purple : "transparent"};

  border: 2px solid ${(props) => (props.checked ? "transparent" : props.theme.blue)};
  transition: all 250ms;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const CheckBoxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteItemButton = styled.button`
  background: transparent;
  border: none;
`