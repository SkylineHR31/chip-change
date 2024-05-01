import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (r) => r,
  (error) => {
    const axiosError = error as AxiosError;

    if (axiosError?.response?.status === 500) {
      console.error("500, something went wrong on server side");
    }

    return Promise.reject(error as Error);
  },
);

// for SWR usage
async function fetcher<T>(arg: string | AxiosRequestConfig) {
  const requestConfig: AxiosRequestConfig =
    typeof arg === "string" ? { url: arg, method: "GET" } : arg;

  return api.request(requestConfig).then((res: AxiosResponse<T>) => res.data);
}

export { api, fetcher };
