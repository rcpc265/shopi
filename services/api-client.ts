import axios, { AxiosRequestConfig } from "axios";

const axiosInstace = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

class APIClient<T> {
  constructor(private readonly endpoint: string) {}

  getAll(config?: AxiosRequestConfig) {
    return axiosInstace
      .get<T[]>(this.endpoint, config)
      .then((response) => response.data);
  }
}

export default APIClient;
