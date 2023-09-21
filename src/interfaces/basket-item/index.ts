import { BasketInterface } from 'interfaces/basket';
import { ItemInterface } from 'interfaces/item';
import { GetQueryInterface } from 'interfaces';

export interface BasketItemInterface {
  id?: string;
  basket_id: string;
  item_id: string;
  quantity: number;
  created_at?: any;
  updated_at?: any;

  basket?: BasketInterface;
  item?: ItemInterface;
  _count?: {};
}

export interface BasketItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  basket_id?: string;
  item_id?: string;
}
