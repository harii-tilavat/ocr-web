

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
  {
    id: 3,
    title: 'About',
    icon: null,
    routing: '/about',
    enum: 'ABOUT',
    subMenu: []
  },
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
  // {
  //   id: 1,
  //   title: 'Dashboard',
  //   routing: ['dashboard'],
  //   icon: 'bx bx-home-circle',
  //   enum: 'DASHBOARD',
  //   subMenu: []
  // },
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
    title: 'Wallet',
    routing: ['wallet'],
    icon: 'bx bx-dollar me-2',
    enum: 'WALLET',
    subMenu: []
  },
  // {
  //   id: 2,
  //   title: 'My account',
  //   routing: ['profile'],
  //   enum: 'MY_ACCOUNT',
  //   icon: 'bx bx-user',
  //   subMenu: []
  // },
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
