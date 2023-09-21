const mapping: Record<string, string> = {
  baskets: 'basket',
  'basket-items': 'basket_item',
  items: 'item',
  sales: 'sales',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
