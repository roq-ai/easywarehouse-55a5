import axios from 'axios';
import queryString from 'query-string';
import { BasketItemInterface, BasketItemGetQueryInterface } from 'interfaces/basket-item';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBasketItems = async (
  query?: BasketItemGetQueryInterface,
): Promise<PaginatedInterface<BasketItemInterface>> => {
  const response = await axios.get('/api/basket-items', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBasketItem = async (basketItem: BasketItemInterface) => {
  const response = await axios.post('/api/basket-items', basketItem);
  return response.data;
};

export const updateBasketItemById = async (id: string, basketItem: BasketItemInterface) => {
  const response = await axios.put(`/api/basket-items/${id}`, basketItem);
  return response.data;
};

export const getBasketItemById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/basket-items/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBasketItemById = async (id: string) => {
  const response = await axios.delete(`/api/basket-items/${id}`);
  return response.data;
};
