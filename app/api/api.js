import axios from "axios";
import queryString from "query-string";
import axiosClient from "./axiosClient";

export const testApi = {
    fetchData: (params) => axiosClient.post(`/aggregator-api/api/v2/customers/by-accounts?${queryString.stringify(params)}`),
    searchUser: (params) => axios.get(`https://api.github.com/search/users?${queryString.stringify(params)}`),
    getPosts: (params) => axios.get(`https://jsonplaceholder.typicode.com/posts?${queryString.stringify(params)}`),
    getMovieData: (params) => axios.get(`https://rickandmortyapi.com/api/character?${queryString.stringify(params)}`),
}