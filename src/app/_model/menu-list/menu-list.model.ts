

export class MenuListModel {
  id!: number;
  title!: string;
  icon!: string | null;
  subMenu!: Array<any>;
  routing!: Array<string | number> | null | string;
}
export const menuConfig: Array<MenuListModel> = [
  {
    id: 1,
    title: 'Home',
    icon: null,
    routing: ['/'],
    subMenu: []
  },
  {
    id: 3,
    title: 'About',
    icon: null,
    routing: '/about',
    subMenu: []
  },
  {
    id: 4,
    title: 'Contact',
    icon: null,
    routing: '/contact',
    subMenu: []
  },
  {
    id: 4,
    title: 'Documents',
    icon: null,
    routing: '/docs',
    subMenu: []
  },
]
