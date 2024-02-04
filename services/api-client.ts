import axios, { AxiosRequestConfig } from "axios";

const axiosInstace = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

class APIClient<T> {
  constructor(private readonly endpoint: string) {}

  getAll = (config?: AxiosRequestConfig): Promise<T[]> =>
    axiosInstace.get<T[]>(this.endpoint, config).then((res) => res.data);

  getOne = (id: number, config?: AxiosRequestConfig): Promise<T> =>
    axiosInstace
      .get<T>(`${this.endpoint}/${id}`, config)
      .then((res) => res.data);
}

export default APIClient;
