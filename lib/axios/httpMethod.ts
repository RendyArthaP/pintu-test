import { AxiosRequestConfig } from "axios";
import http from "./http";
import { ServiceName, services } from "./services.map";

export const httpGet = async <T = any>(
  serviceName: ServiceName,
  params?: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  const endpoint = services[serviceName];

  const response = await http.get(endpoint, {
    ...config,
    params,
  });

  return response.data;
};
