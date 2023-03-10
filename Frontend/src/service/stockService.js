import httpClient from './http-common';

const getByEmail = (email) => {
    return httpClient.get(`http://localhost:7070/stock/${email}`);
  };


  const updateStock = (data) => {
    return httpClient.post(`http://localhost:7070/stock/update`,data);
  };

  const getAllBloodStock = () => {
    return httpClient.get(`http://localhost:7070/stock/all`);
  };

  
  const getAllBloodStockByCity = (cityId) => {
    return httpClient.get(`http://localhost:7070/stock/city/${cityId}`);
  };

  const getAllBloodStockByDistrict = (districtId) => {
    return httpClient.get(`http://localhost:7070/stock/district/${districtId}`);
  };

  const getAllBloodStockByState = (stateId) => {
    return httpClient.get(`http://localhost:7070/stock/state/${stateId}`);
  };


  


  export default { getByEmail,updateStock, getAllBloodStock, getAllBloodStockByCity, getAllBloodStockByDistrict, getAllBloodStockByState};