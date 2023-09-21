import axios from 'axios';
import queryString from 'query-string';
import { BasketInterface, BasketGetQueryInterface } from 'interfaces/basket';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBaskets = async (query?: BasketGetQueryInterface): Promise<PaginatedInterface<BasketInterface>> => {
  const response = await axios.get('/api/baskets', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBasket = async (basket: BasketInterface) => {
  const response = await axios.post('/api/baskets', basket);
  return response.data;
};

export const updateBasketById = async (id: string, basket: BasketInterface) => {
  const response = await axios.put(`/api/baskets/${id}`, basket);
  return response.data;
};

export const getBasketById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/baskets/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBasketById = async (id: string) => {
  const response = await axios.delete(`/api/baskets/${id}`);
  return response.data;
};
