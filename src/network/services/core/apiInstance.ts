import axios from "axios";
import { API_URL } from "../../../config/appconfig";


export const apiRequest = axios.create({
    baseURL: API_URL,
    timeout: 2000
  });