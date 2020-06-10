import axios from 'axios'

const url = 'https://brasil.io/api/dataset/covid19/caso_full/data/'

/**
 * 
 * @param {number} city_ibge_code código IBGE do município.
 */
function useApiBrasilIO(city_ibge_code) {

  const api = axios({
    method: 'get',
    url,
    params: {
      city_ibge_code
    },
    transformResponse: [
      data => {
        let response = JSON.parse(data);
        response.results.forEach(result => {
          let { date } = result;
          let newDate = String(date).split('-').reverse().join('/');
          result.date = newDate;
        });
        return response;
      }
    ]

  });

  return api;
}

export default useApiBrasilIO;