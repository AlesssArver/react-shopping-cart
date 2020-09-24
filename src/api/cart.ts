import axios from "axios";

import { IGood } from "./good";

export const instance = axios.create({
  baseURL: "http://localhost:4000/cart/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getGoods: () => {
    return instance.get<Array<IGood>>(`/`).then((res) => res.data);
  },
  addGood: (good: IGood) => {
    return instance
      .post<Array<IGood>>(`/`, { ...good })
      .then((res) => res.data);
  },
  deleteGood(id: number) {
    return instance.delete(`${id}`).then((res) => res.data);
  },
};
