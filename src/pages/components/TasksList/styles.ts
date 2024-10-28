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
export const Headline = styled.div`
display: flex;
align-items: center;
justify-content: space-between;


p{
    color: ${props => props.theme["blue"]};
    font-weight: bold;
    font-size: 0.875rem;

}
span{
    padding: 0.125rem 0.5rem;
    border-radius: 999px;
    font-size: 0.875rem;
    font-weight: bold;
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-200"]}
}

`



export const CreatedTasks = styled.div`
 display: flex;
 align-items: center;
 gap: 0.5rem;
`



export const CompletedTasks = styled.div`
 display: flex;
 align-items: center;
 gap: 0.5rem;

 
p{
    color: ${props => props.theme["purple"]};
    font-weight: bold;
    font-size: 0.875rem;

}
span{
    padding: 0.125rem 0.5rem;
    border-radius: 999px;
    font-size: 0.875rem;
    font-weight: bold;
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-200"]}
}
`