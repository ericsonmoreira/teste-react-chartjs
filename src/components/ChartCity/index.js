import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import { Container } from './styles';

function ChartCity({city_ibge_code}) {

  // Dados do Chart
  const [chartData, setChartData] = useState({})
  const [cityName, setCityName] = useState('')
  const [UF, setUF] = useState('')

  // Desenhando o Chart
  const drawnChart = () => {
    setChartData({
      labels: [],
      datasets: [
        {
          label: 'Casos Confirmados',
          backgroundColor: 'rgba(255, 100, 0, 0.7)',
          borderWidth: 1,
          data: []
        },
        {
          label: 'Mortes',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderWidth: 1,
          data: []
        }
      ]
    })
  }

  // A url da API está configurada para tabuleiro do norte -> city_ibge_code=2313104
  function handleDataSet() {
    const url = `https://brasil.io/api/dataset/covid19/caso_full/data/?city_ibge_code=${city_ibge_code}`
    fetch(url).then(res => res.json()).then(data => {
      data.results.reverse().forEach(result => {
        chartData.labels = [...chartData.labels, result.date]
        chartData.datasets[0].data = [...chartData.datasets[0].data, result.last_available_confirmed]
        chartData.datasets[1].data = [...chartData.datasets[1].data, result.last_available_deaths]
      })
      setCityName(data.results[0].city) // setando o nome da cidade
      setUF(data.results[0].state) // setando o nome do estado
      setChartData(chartData)
    }).catch(err =>
      console.log(err)
    )
  }

  useEffect(() => {
    drawnChart()
    handleDataSet()
  }, [])

  return (
    <Container>
      <Line data={chartData} height={400} width={800} options={{
        responsive: true,
        title: {
          text: `Progressão dos casos de Covid-19 em ${cityName} - ${UF}`,
          display: true,
          fontSize: 20
        },
        scales: {
          xAxes: [

          ],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }} />
    </Container>
  );

}

export default ChartCity;