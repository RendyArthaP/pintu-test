import { httpGet } from "@/lib/axios/httpMethod";

export const getPicsumList = (page: number, limit: number) => {
  return httpGet("picsumList", { page, limit });
};
