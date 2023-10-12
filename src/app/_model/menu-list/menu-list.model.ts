import { TeamsOfShapesModel } from "../teams-of-shapes/teams-of-shapes.model";

export class MenuListModel {
  id!: number;
  title!: string;
  icon!: string | null;
  subMenu!: TeamsOfShapesModel[];
  routing!: Array<string | number> | null | string;
}
export const menuConfig = [
  {
    id: 1,
    title: 'Teams',
    icon: null,
    routing: '/teams',
    subMenu: [
      {
        id: 1,
        icon: 'icon-pm',
        title: 'Product Managers',
        desc: 'Uncover the "why" behind user behaviour',
        link: 'managers'
      },
      {
        id: 2,
        icon: 'icon-pd',
        title: 'Product Designers',
        desc: 'Make design decisions powered by user insights',
        link: 'designers'
      },
      {
        id: 3,
        icon: 'icon-marketer',
        title: 'Marketers',
        desc: 'Connect with audiences through informed understanding',
        link: 'marketers'
      },
      {
        id: 4,
        icon: 'icon-uxr',
        title: 'UX researchers',
        desc: 'Unlock user behaviour to power better decision making',
        link: 'researchers'
      },
      {
        id: 5,
        icon: 'icon-founder',
        title: 'Founders',
        desc: 'Drive business success with user-focussed strategy',
        link: 'founders'
      },
    ]
  },
  {
    id: 2,
    title: 'Resources',
    icon: null,
    routing: '/',
    subMenu: [
      {
        id: 1,
        icon: 'blog',
        title: 'Blog',
        desc: 'Best practices and news on user research and insight',
        link: 'blog'
      },
      {
        id: 2,
        icon: 'customer-story',
        title: 'Customer stories',
        desc: 'How our customers succesfully leverage GetCurious',
        link: 'resources'
      }
    ]
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
    id: 5,
    title: 'Pricing',
    routing: '/pricing',
    icon: null,
    subMenu: []
  },
]
