import React, { useState } from "react";
import {
  DashboardOutlined,
  UserOutlined,
  LineChartOutlined,
  GiftOutlined,
  CommentOutlined,
  SkinOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [open, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!open);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <DashboardOutlined />,
    },
    {
      path: "/about",
      name: "About",
      icon: <UserOutlined />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <LineChartOutlined />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <CommentOutlined />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <SkinOutlined />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <GiftOutlined />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: open ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: open ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: open ? "50px" : "0px" }} className="bars">
            <BarsOutlined onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: open ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
