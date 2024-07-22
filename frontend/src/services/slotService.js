import axios from 'axios';
const API_URL = 'http://localhost:3000/api/slots/';
const getSlots = () => {
 return axios.get(API_URL);
};
const slotService = {
 getSlots
};
export default slotService;