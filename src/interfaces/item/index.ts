import { BasketItemInterface } from 'interfaces/basket-item';
import { GetQueryInterface } from 'interfaces';

export interface ItemInterface {
  id?: string;
  name: string;
  category: string;
  purchase_price: number;
  sale_price: number;
  quantity: number;
  created_at?: any;
  updated_at?: any;
  basket_item?: BasketItemInterface[];

  _count?: {
    basket_item?: number;
  };
}

export interface ItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category?: string;
}
