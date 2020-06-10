import axios from 'axios'

//`https://brasil.io/api/dataset/covid19/caso_full/data/?city_ibge_code=${city_ibge_code}`


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
  });

  return api;
}

export default useApiBrasilIO;