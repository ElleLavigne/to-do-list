import styled from "styled-components";

export const AddNewTaskContainer = styled.form`
 display: flex;
 gap: 0.50rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["gray-700"]};
    padding: 1rem;
    background: ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme["gray-100"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    } 
  }

`

export const CreateNewTaskButton = styled.button`
 
    display: flex;
    align-items: center;
    gap: 0.50rem;
    padding: 1rem;
    border: 0;
    border-radius: 8px ;

    background-color: ${props => props.theme["blue-dark"]};
    color: ${props => props.theme["gray-100"]};
    font-weight: bold;

    &:disabled{
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["blue"]};
      color: ${(props) => props.theme["gray-100"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    
  }
`