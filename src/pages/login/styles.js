import styled from 'styled-components';
import { primaryColor, erroColor } from '../../colors'

export const Container = styled.div`
  width: 400px;
  background-color: ${primaryColor};
  border-radius: 5px;
  padding: 1em;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);

  & img {
    width:5em;
    height:5em;
  }

  & .Form {
    display: inline;
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

  & button{
    background-color: azure;
    color: #000;
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 7px;
    margin-top: 2rem; 
  }
`;
