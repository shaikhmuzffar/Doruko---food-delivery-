import React from 'react'
import './siderBox.css'
import logoAndTagline from '../../assets/logo/logoAndTagline.png'
import { NavLink } from "react-router-dom";




// icons
import homeIcon from '../../assets/icons/homeIcon.png'
import homeIconFilled from '../../assets/icons/homeIconFilled.png'
import categoriesIcon from '../../assets/icons/categoriesIcon.png'
import ordersIcon from '../../assets/icons/orderIcon.png'
import supportIcon from '../../assets/icons/supportIcon.png'
import logoutIconBlack from '../../assets/icons/logoutIconBlack.png'
import settingIcon from '../../assets/icons/settingIcon.png'

// remix icons Imports
import { MdFoodBank } from 'react-icons/md'

// components

const menuLinks = [
    {
        name: "Home",
        Icon:homeIcon,
        iconFilled: homeIconFilled,
        path: "/"

    },
    {
        name: "Categories",
        icon: categoriesIcon,
        path: "/products"
    },
    {
        name: "Cart",
        icon: ordersIcon,
        path: "/cart"
    },
    {
        name: "Orders",
        icon: ordersIcon,
        path: "/orders"
    },
    {
        name: "Support",
        icon: supportIcon,
        path: "/support"
    },
]
const userActions = [
    {
        name: "Settings",
        icon: settingIcon
    },
    {
        name: "Logout",
        icon: logoutIconBlack
    },
]

export default function SiderBox() {
    return (
        <div className="sidbarbox">
            {/* logobox */}
            <div className="logoBox">
                <div className="logo">
                    <img src={logoAndTagline} alt="" />
                </div>
            </div>
            {/* sidebarMenu */}
            <div className="sidbarMenu">
                <ul className="sidebarLinks">
                    {
                        menuLinks.map((menuLink, index) =>
                            <li key={index}>
                                <NavLink to={menuLink.path} className={({ isActive }) => isActive ? "sidebarMenuLinkActive" : "sidebarMenuLink"}>
                                   
                                    <span>{menuLink.name}</span>
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="sideBarUserActions">
                <ul className="sideBarUserActionLinks">
                    {
                        userActions.map((menuLink, index) =>
                            <li key={index}>
                                <a href="" className="sidebarMenuLink">
                                    <img src={menuLink.icon} alt="" />
                                    <span>{menuLink.name}</span>
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
