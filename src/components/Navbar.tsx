import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaHeart, FaUserAlt, FaVideo, FaChartLine, FaChartPie } from 'react-icons/fa';
import { TbHelpOctagon } from 'react-icons/tb';
import { FaChartSimple } from 'react-icons/fa6';
import { MdDarkMode, MdOutlineAreaChart } from 'react-icons/md';
import { CgDarkMode } from 'react-icons/cg';
import { CiDark } from 'react-icons/ci';
import Logo from "../assets/images/logo.png";
import './NavBar.css';

const Navbar: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    const [open, setOpen] = React.useState<'charts' | 'maps' | 'theme' | undefined>();

    const handleOpenSubMenu = (key: 'charts' | 'maps' | 'theme') => {
        setOpen(open === key ? undefined : key);
    };

    return (
        <div style={{ display: 'flex', height: '100vh', minHeight: '100%' }}>
            <Sidebar collapsed={collapsed} transitionDuration={1000} style={{backgroundColor:"#5876aa",color:"#fff"}}>
                <Menu onClick={() => setCollapsed(!collapsed)}>
                    <div className="css-1vmkajq" style={{ marginBottom: '24px', marginTop: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="css-kyhzew">
                                <img src={Logo} alt="logo" />
                            </div>
                            {!collapsed && (
                                <div style={{ marginLeft: '8px' }}>
                                    <p style={{ fontWeight: 700,  margin: 0 }} className="css-crt1ee">
                                        Nucleus
                                    </p>
                                    <p style={{
                                        // color: '#0098e5',
                                        margin: -8,
                                        marginTop: '4px',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }} className="css-crt1ee">
                                        Common App
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </Menu>

                <div style={{ padding: '0px 12px', marginBottom: '8px' }}>
                    <p className="css-1o7yz74" style={{ fontWeight: 600, opacity: 0.7, letterSpacing: '0.5px' }}>
                        General
                    </p>
                </div>

                <Menu>
                    <SubMenu
                        onClick={() => handleOpenSubMenu('charts')}
                        open={open === 'charts'}
                        label="Charts"
                        icon={<FaChartLine />}
                    >
                        <MenuItem icon={<FaChartPie />}>Pie charts</MenuItem>
                        <MenuItem icon={<MdOutlineAreaChart />}>Line charts</MenuItem>
                        <MenuItem icon={<FaChartSimple />}>Bar charts</MenuItem>
                    </SubMenu>

                    <SubMenu
                        onClick={() => handleOpenSubMenu('maps')}
                        open={open === 'maps'}
                        label="Maps"
                        icon={<FaHeart />}
                    >
                        <MenuItem>Google maps</MenuItem>
                        <SubMenu label="Google Earth">
                            <MenuItem>View 2D Map</MenuItem>
                            <MenuItem>View 3D Globe</MenuItem>
                            <MenuItem>Street View</MenuItem>
                        </SubMenu>
                        <MenuItem>Open street maps</MenuItem>
                    </SubMenu>

                    <div style={{ padding: '0px 12px', marginBottom: '8px' }}>
                        <p className="css-1o7yz74" style={{ fontWeight: 600, opacity: 0.7, letterSpacing: '0.5px' }}>
                            General
                        </p>
                    </div>

                    <SubMenu
                        onClick={() => handleOpenSubMenu('theme')}
                        open={open === 'theme'}
                        label="Theme"
                        icon={<CgDarkMode />}
                    >
                        <MenuItem icon={<MdDarkMode />}>Dark</MenuItem>
                        <MenuItem icon={<CiDark />}>Light</MenuItem>
                    </SubMenu>
                </Menu>

                {/* {!collapsed && (
                    <div style={{ position: 'absolute', bottom: 0, width: '100%', padding: '20px', textAlign: 'center' }}>
                        <div className="css-49v479">
                            <div>
                                <div style={{ marginBottom: '12px' }}>
                                    <svg
                                        xmlns="http:www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                                    </svg>
                                </div>
                                <p style={{ fontWeight: 600 }} className="css-1t8vr00">
                                    Pro Sidebar
                                </p>
                                <p className="css-idbnva" style={{ letterSpacing: '1px', opacity: 0.7 }}>
                                    V 1.1.0
                                </p>
                                <div style={{ marginTop: '16px' }}>
                                    <a
                                        href="https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="css-1hnpzud"
                                    >
                                        <p style={{ color: '#607489', fontWeight: 600 }} className="css-qnnkq7">
                                            View code
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}

                <Menu style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <SubMenu icon={<TbHelpOctagon />} label="Help">
                        <MenuItem icon={<FaVideo />}>
                            <div className="small-heading">
                                Training videos
                            </div>
                            Get an overview
                        </MenuItem>
                    </SubMenu>

                    <SubMenu icon={<FaUserAlt />} label="User">
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Update Profile</MenuItem>
                        <MenuItem>Change password</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>

            <main style={{ display: 'flex', padding: 10, margin: 30 }}>
                <div>
                    <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
                        Collapse
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Navbar;

