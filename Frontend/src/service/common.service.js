import httpClient from './http-common';
//const baseURL='http://localhost:7070/commondata/'
const getAllStates = () => {
  return httpClient.get(`http://localhost:7070/commondata/allstates`);
};


const getAllDistrictsByStateId = (stateId) => {
    return httpClient.get(`http://localhost:7070/commondata/districts/${stateId}`);
  };

  //http://localhost:7070/commondata/cities/'+districtId
  const getAllCitiesByDistricId = (districtId) => {
    return httpClient.get(`http://localhost:7070/commondata/cities/${districtId}`);
  };

  const getVerifyUserEmail = (email) => {
    return httpClient.get(`http://localhost:7070/commondata/verifyemail/${email}`);
  };

  

  const getUserLogin = (email, password) => {
    return httpClient.get(`http://localhost:7070/commondata/login/${email}/${password}`);
  };

  

  const getSessionUser = () => {
    return httpClient.get(`http://localhost:7070/commondata/sessionuser`);
  };

// const create = (data) => {
//   return httpClient.post('', data);
// };

// const get = (id) => {
//   return httpClient.get(`${id}`);
// };

// const update = (data) => {
//   return httpClient.put('', data);
// };

// const remove = (id) => {
//   return httpClient.delete(`/${id}`);
// };
export default { getAllStates,getAllDistrictsByStateId, 
  getAllCitiesByDistricId, getVerifyUserEmail,getUserLogin, getSessionUser};
