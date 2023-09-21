import { BasketItemInterface } from 'interfaces/basket-item';
import { SalesInterface } from 'interfaces/sales';
import { GetQueryInterface } from 'interfaces';

export interface BasketInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  basket_item?: BasketItemInterface[];
  sales?: SalesInterface[];

  _count?: {
    basket_item?: number;
    sales?: number;
  };
}

export interface BasketGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
