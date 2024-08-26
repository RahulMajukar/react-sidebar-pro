// src/config/navbar.config.ts
import { FaHeart, FaUserAlt, FaVideo, FaChartLine, FaChartPie } from 'react-icons/fa';
import { TbHelpOctagon } from 'react-icons/tb';
import { FaChartSimple } from 'react-icons/fa6';
import { MdDarkMode, MdOutlineAreaChart } from 'react-icons/md';
import { CgDarkMode } from 'react-icons/cg';
import { CiDark } from 'react-icons/ci';
import { IconType } from 'react-icons';

export type SubMenuType = {
    label: string;
    icon?: IconType;
    description?: string;
    subMenus?: SubMenuType[];
};

export type MenuType = {
    key: string;
    label: string;
    icon: IconType;
    subMenus?: SubMenuType[];
};

export const navbarConfig = {
    mainTitle: "Nucleus",
    subTitle: "Common App",
    menus: [
        {
            key: "charts",
            label: "Charts",
            icon: FaChartLine,
            subMenus: [
                { label: "Pie charts", icon: FaChartPie },
                { label: "Line charts", icon: MdOutlineAreaChart },
                { label: "Bar charts", icon: FaChartSimple },
            ],
        },
        {
            key: "maps",
            label: "Maps",
            icon: FaHeart,
            subMenus: [
                { label: "Google maps" },
                {
                    label: "Google Earth",
                    subMenus: [
                        { label: "View 2D Map" },
                        { label: "View 3D Globe" },
                        { label: "Street View" },
                    ],
                },
                { label: "Open street maps" },
            ],
        },
        {
            key: "theme",
            label: "Theme",
            icon: CgDarkMode,
            subMenus: [
                { label: "Dark", icon: MdDarkMode },
                { label: "Light", icon: CiDark },
            ],
        },
        {
            key: "help",
            label: "Help",
            icon: TbHelpOctagon,
            subMenus: [
                { label: "Training videos", icon: FaVideo, description: "Get an overview" },
            ],
        },
        {
            key: "user",
            label: "User",
            icon: FaUserAlt,
            subMenus: [
                { label: "Settings" },
                { label: "Update Profile" },
                { label: "Change password" },
            ],
        },
    ] as MenuType[], // Cast as MenuType array
};