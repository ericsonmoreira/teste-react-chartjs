import React from 'react';

import { Container } from './styles';
import icon from '../../../public/githubicon.svg'

function Info() {
  
  const url = "https://github.com/ericsonmoreira/teste-react-chartjs"

  return (
    <Container>
      <a href={url}>
        <img src={icon} alt="logo" />
      </a>
    </Container>
  )
}

export default Info;