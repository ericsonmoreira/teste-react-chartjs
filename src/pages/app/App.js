import React from 'react';
import ChartCity from '../../components/ChartCity'
import Info from '../../components/Info'
import { Container } from './styles'

function App() {

  // códigos ibge das cidades 
  const codes = [
    2311801, // Russas
    2308708, // Morada Nova
    2307601, // Limoeiro do Norte
    2306900, // Jaguaribe
    2313104, // Tabuleiro do Norte 
    2311504, // Quixeré
    2306702, // Jaguaretama
    2300705, // Alto Santo
    2310803, // Pereiro
    2306009, // Iracema
    2306801, // Jaguaribara
    2310001, // Palhando
    2312502, // São João do Jaguaribe
    2304277, // Ererê
    2311231, // Potiretama
  ]

  return (
    <Container>
      <h1>Dados Covid-19 de Vale do Jaguaribe</h1>
      {codes.map(code => (<ChartCity key={code} city_ibge_code={code} />))}      
      <Info />
    </Container>
  );

}

export default App;
