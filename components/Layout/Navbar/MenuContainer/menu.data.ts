import { IMenu } from "./menu.interface";

export const navMenu: IMenu = {
    title: 'Menu',
    items: [
        {
        title: 'Home',
        icon: 'MdHome',
        link: '/'
        },
        {
        title: 'Discovery',
        icon: 'MdExplore',
        link: '/genres'
        },
        {
        title: 'Fresh movies',
        icon: 'MdRefresh',
        link: '/fresh'
        },
        {
        title: 'Trending',
        icon: 'MdLocalFireDepartment',
        link: '/trending'
        },

    ]
}

export const userMenu: IMenu = {
    title: 'General',
    items: []
}

