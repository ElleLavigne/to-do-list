import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";


export const TasksContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const CheckBoxRoot = styled(Checkbox.Root)`
background-color: ${props => props.theme.blue};

`