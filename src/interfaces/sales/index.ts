import { UserInterface } from 'interfaces/user';
import { BasketInterface } from 'interfaces/basket';
import { GetQueryInterface } from 'interfaces';

export interface SalesInterface {
  id?: string;
  user_id: string;
  basket_id: string;
  total_price: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  basket?: BasketInterface;
  _count?: {};
}

export interface SalesGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  basket_id?: string;
}
