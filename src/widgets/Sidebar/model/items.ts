import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/articles.svg';

export interface SidebarItemType {
    path: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    text: string;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: ArticleIcon,
        authOnly: true,
    },
];
