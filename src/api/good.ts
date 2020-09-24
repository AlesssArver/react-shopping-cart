import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:4000/goods/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export type IGood = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default {
  getGoods: () => {
    return instance.get<Array<IGood>>(`/`).then((res) => res.data);
  },
  createGood: (name: string, price: number, quantity: number) => {
    return instance
      .post(`/`, { name, price, quantity })
      .then((res) => res.data);
  },
  incrementGood: (id: number, quantity: number) => {
    return instance.put(`${id}`, { quantity }).then((res) => res.data);
  },
  deleteGood(id: number) {
    return instance.delete(`${id}`).then((res) => res.data);
  },
};
