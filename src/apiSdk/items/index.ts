import axios from 'axios';
import queryString from 'query-string';
import { ItemInterface, ItemGetQueryInterface } from 'interfaces/item';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getItems = async (query?: ItemGetQueryInterface): Promise<PaginatedInterface<ItemInterface>> => {
  const response = await axios.get('/api/items', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createItem = async (item: ItemInterface) => {
  const response = await axios.post('/api/items', item);
  return response.data;
};

export const updateItemById = async (id: string, item: ItemInterface) => {
  const response = await axios.put(`/api/items/${id}`, item);
  return response.data;
};

export const getItemById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/items/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteItemById = async (id: string) => {
  const response = await axios.delete(`/api/items/${id}`);
  return response.data;
};
