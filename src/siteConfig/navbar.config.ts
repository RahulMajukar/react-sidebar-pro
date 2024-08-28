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
    path?: string; // Add routing path
    subMenus?: SubMenuType[];
    style?: React.CSSProperties; // Add this
};

export type MenuType = {
    key: string;
    label: string;
    icon: IconType;
    path?: string; // Add routing path
    subMenus?: SubMenuType[];
    style?: React.CSSProperties; // Add this
};

export const navbarConfig = {
    mainTitle: "Nucleus",
    subTitle: "Common App",
    menus: [
        {
            key: "charts",
            label: "Charts",
            icon: FaChartLine,
            path: "/", // Routing for Charts main menu
            subMenus: [
                { label: "Pie charts", icon: FaChartPie, path: "/" }, // Routing for Pie charts
                { label: "Line charts", icon: MdOutlineAreaChart, path: "products" }, // Routing for Line charts
                { label: "Bar charts", icon: FaChartSimple, path: "/charts/bar" }, // Routing for Bar charts
            ],
        },
        {
            key: "maps",
            label: "Maps",
            icon: FaHeart,
            path: "/maps", // Routing for Maps main menu
            subMenus: [
                { label: "Google maps", path: "/maps/google" }, // Routing for Google maps
                {
                    label: "Google Earth",
                    path: "/maps/earth", // Routing for Google Earth
                    subMenus: [
                        { label: "View 2D Map", path: "/maps/earth/2d" }, // Routing for View 2D Map
                        { label: "View 3D Globe", path: "/maps/earth/3d" }, // Routing for View 3D Globe
                        { label: "Street View", path: "/maps/earth/street" }, // Routing for Street View
                    ],
                },
                { label: "Open street maps", path: "/maps/openstreet" }, // Routing for Open street maps
            ],
        },
        {
            key: "theme",
            label: "Theme",
            icon: CgDarkMode,
            path: "/theme", // Routing for Theme main menu
            subMenus: [
                { label: "Dark", icon: MdDarkMode, path: "/theme/dark" }, // Routing for Dark theme
                { label: "Light", icon: CiDark, path: "/theme/light" }, // Routing for Light theme
            ],
        },
        {
            key: "help",
            label: "Help",
            icon: TbHelpOctagon,
            path: "/help", 
            subMenus: [
                { label: "Training videos", icon: FaVideo, description: "Get an overview", path: "/help/videos" }, // Routing for Training videos
            ],
            style: { position: 'absolute', bottom: '60px', width: '100%' }, // Added style
        },
        {
            key: "user",
            label: "User",
            icon: FaUserAlt,
            path: "/user", 
            subMenus: [
                { label: "Settings", path: "/user/settings" }, // Routing for Settings
                { label: "Update Profile", path: "/user/update-profile" }, // Routing for Update Profile
                { label: "Change password", path: "/user/change-password" }, // Routing for Change password
            ],
            style: { position: 'absolute', bottom: 0, width: '100%' }, // Added style
        },
    ] as MenuType[], // Cast as MenuType array
};
