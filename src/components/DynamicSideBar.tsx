// src/components/Navbar.tsx
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { navbarConfig } from '../siteConfig/navbar.config';
import Logo from "../assets/images/logo.png";
import './NavBar.css';

const DynamicSideBar: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    const [open, setOpen] = React.useState<string | undefined>();

    const handleOpenSubMenu = (key: string) => {
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
                                        {navbarConfig.mainTitle}
                                    </p>
                                    <p style={{
                                        margin: -8,
                                        marginTop: '4px',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }} className="css-crt1ee">
                                        {navbarConfig.subTitle}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </Menu>

                {navbarConfig.menus.map((menu) => (
                    <Menu key={menu.key}>
                        <SubMenu
                            onClick={() => handleOpenSubMenu(menu.key)}
                            open={open === menu.key}
                            label={menu.label}
                            icon={React.createElement(menu.icon)}
                        >
                            {menu.subMenus?.map((subMenu, index) =>
                                subMenu.subMenus ? (
                                    <SubMenu key={index} label={subMenu.label}>
                                        {subMenu.subMenus.map((nestedSubMenu, nestedIndex) => (
                                            <MenuItem key={nestedIndex}>
                                                {nestedSubMenu.label}
                                            </MenuItem>
                                        ))}
                                    </SubMenu>
                                ) : (
                                    <MenuItem key={index} icon={subMenu.icon && React.createElement(subMenu.icon)}>
                                        {subMenu.label}
                                    </MenuItem>
                                )
                            )}
                        </SubMenu>
                    </Menu>
                ))}

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

export default DynamicSideBar;
