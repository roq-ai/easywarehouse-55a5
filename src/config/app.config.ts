interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Owner'],
  customerRoles: [],
  tenantRoles: ['Store Owner', 'Inventory Manager', 'Customer'],
  tenantName: 'Team',
  applicationName: 'easyWarehouse',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage team information',
    'Manage item inventory',
    'Manage sales records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6fc00b39-61a2-4c24-823a-9755ef6a1533',
};
