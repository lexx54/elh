import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api/test/";
const API_URL = "https://obscure-river-43181.herokuapp.com/api/test/"

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = (id) => {
  return axios.get(API_URL + `user`, { headers: authHeader() })
    .then(res=>res.data)
    .then(res=>{
      const filteredData=[]
      for (const data of res){
        if (data.level === id) filteredData.push(data);
      }
      return filteredData;
    });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "teacher", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
export default UserService;