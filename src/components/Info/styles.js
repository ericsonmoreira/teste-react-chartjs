import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;

  & img {
    height: 25px;
    width: 25px;
    transition: .2s;
  }

  & img:hover {
  height: 50px;
  width: 50px;
  transition: .2s;
  }
`;


