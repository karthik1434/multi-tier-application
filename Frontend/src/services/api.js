import axios from "axios";

const API_BASE_URL = "http://localhost:1337/api";

export const fetchArticles = () => {
  return axios.get(`${API_BASE_URL}/karthik-articles?populate=*`);
};
export const mytools = () => {
  return axios.get(`${API_BASE_URL}/mytools?populate=*`);
};
