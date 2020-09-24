import axios from "axios";

export const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/AlesssArver/react-shopping-cart/goods",
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
    return instance
      .get<Array<IGood>>(`?_sort=id&_order=desc`)
      .then((res) => res.data);
  },
  createGood: (name: string, price: number, quantity: number) => {
    return instance
      .post(`/`, { name, price, quantity })
      .then((res) => res.data);
  },
  incrementGood: (
    id: number,
    name: string,
    price: number,
    quantity: number
  ) => {
    return instance
      .put(`${id}`, { name, price, quantity })
      .then((res) => res.data);
  },
  deleteGood(id: number) {
    return instance.delete(`${id}`).then((res) => res.data);
  },
};
