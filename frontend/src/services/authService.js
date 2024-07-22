import axios from 'axios';
const API_URL = 'http://localhost:3000/api/user';
const register = (name, email, password, role) => {
 return axios.post(API_URL + 'register', {
   name,
   email,
   password,
   role
 });
};
const login = (email, password) => {
 return axios.post(API_URL + 'login', {
   email,
   password
 })
 .then(response => {
   if (response.data.token) {
     localStorage.setItem('user', JSON.stringify(response.data));
   }
   return response.data;
 });
};
const logout = () => {
 localStorage.removeItem('user');
};
const authService = {
 register,
 login,
 logout
};
export default authService;