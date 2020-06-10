import styled from 'styled-components';
import { primaryColor, erroColor } from '../../colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  background-color: ${primaryColor};
  padding: 10px;

  & img {
    align-self: center;
    width:5em;
    height:5em;
  }

  & .Form {
    display: flex;
  }

  & .Field {
    border: none;
    margin-top: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fdfdfd;
    width: 100%;
    padding: 1em;
    border-radius: 7px;
    transition: all .2s;
  }

  & .Field:focus {
    outline: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.7)
  }

  & span {
    height: 10px;
    width: 100%;
    color: ${erroColor};
  }

`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${primaryColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SubTitle = styled.h3`

`;

export const FieldLogin = styled.div`
  
`;

export const BtnLogin = styled.button`
  background-color: azure;
  color: #000;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 7px;
  margin-top: 2rem; 
`;
