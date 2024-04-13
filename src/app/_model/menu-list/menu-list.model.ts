

export class MenuListModel {
  id!: number;
  title!: string;
  icon!: string | null;
  subMenu!: Array<any>;
  routing!: Array<string | number> | null | string;
  enum!: string;
}
export const menuConfig: Array<MenuListModel> = [
  {
    id: 1,
    title: 'Home',
    icon: null,
    routing: ['/'],
    enum: 'HOME',
    subMenu: []
  },
  // {
  //   id: 3,
  //   title: 'About',
  //   icon: null,
  //   routing: '/about',
  //   enum: 'ABOUT',
  //   subMenu: []
  // },
  {
    id: 4,
    title: 'Contact',
    icon: null,
    routing: '/contact',
    enum: 'CONTACT',
    subMenu: []
  },
  {
    id: 5,
    title: 'Pricing',
    icon: null,
    routing: '/pricing',
    enum: 'PRICING',
    subMenu: []
  }
]
export const sidebarMenuConfig: Array<MenuListModel> = [
  {
    id: 2,
    title: 'Documents',
    routing: ['docs'],
    icon: 'bx bx-file',
    enum: 'DOCUMENTS',
    subMenu: []
  },
  {
    id: 3,
    title: 'Upload document',
    routing: ['upload'],
    icon: 'bx bx-cloud-upload',
    enum: 'UPLOAD_DOCUMENT',
    subMenu: []
  },
  {
    id: 3,
    title: 'CSV to JSON',
    routing: ['csv-to-json'],
    icon: 'bx bx-table',
    enum: 'CSV_TO_JSON',
    subMenu: []
  },
  // {
  //   id: 3,
  //   title: 'Create your pdf',
  //   routing: ['create-pdf'],
  //   icon: 'bx bxs-file-pdf',
  //   enum: 'CREATE_PDF',
  //   subMenu: []
  // },
  {
    id: 3,
    title: 'Wallet',
    routing: ['wallet'],
    icon: 'bx bx-wallet ',
    enum: 'WALLET',
    subMenu: []
  },
  {
    id: 5,
    title: 'Pricing',
    icon: 'bx bxs-credit-card',
    routing: ['pricing'],
    enum: 'PRICING',
    subMenu: []
  },
  {
    id: 2,
    title: 'Bin',
    routing: ['bin'],
    icon: 'bx bx-trash',
    enum: 'BIN',
    subMenu: []
  },
  {
    id: 2,
    title: 'My account',
    routing: ['account-setting'],
    icon: 'bx bx-user',
    enum: 'SETTING',
    subMenu: []
  },
  {
    id: 2,
    title: 'Logout',
    routing: null,
    icon: 'bx bx-power-off',
    enum: 'LOGOUT',
    subMenu: []
  },
]
export const adminMenuConfig: Array<MenuListModel> = [
  {
    id: 1,
    title: 'Dashboard',
    routing: ['dashboard'],
    icon: 'bx bx-home-circle',
    enum: 'DASHBOARD',
    subMenu: []
  },
  {
    id: 2,
    title: 'Users',
    routing: ['users-list'],
    icon: 'bx bxs-user-circle',
    enum: 'CONTACT_LIST',
    subMenu: []
  },
  {
    id: 2,
    title: 'Contact list',
    routing: ['contact-list'],
    icon: 'bx bxs-contact',
    enum: 'CONTACT_LIST',
    subMenu: []
  },
  {
    id: 3,
    title: 'Feedback list',
    routing: ['feedback-list'],
    icon: 'bx bx-star',
    enum: 'FEEDBACK_LIST',
    subMenu: []
  },
  {
    id: 3,
    title: 'Credits list',
    routing: ['credit-list'],
    icon: 'bx bx-dollar ',
    enum: 'CREDIT_LIST',
    subMenu: []
  },
  {
    id: 3,
    title: 'Referal list',
    routing: ['referal-list'],
    icon: 'bx bxs-user-check',
    enum: 'REFERAL_LIST',
    subMenu: []
  },
  {
    id: 2,
    title: 'My account',
    routing: ['account-setting'],
    icon: 'bx bx-user',
    enum: 'SETTING',
    subMenu: []
  },
  {
    id: 2,
    title: 'Logout',
    routing: null,
    icon: 'bx bx-power-off',
    enum: 'LOGOUT',
    subMenu: []
  },
]
