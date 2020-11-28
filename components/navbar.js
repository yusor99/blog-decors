import { Layout, Menu } from "antd";
const { Sider } = Layout;
const NavBar = () => {
  return (
    <div className="container">
      <Menu
        mode="horizontal"
        style={{
          margin: 5,
          padding: 5,
          color: "black",
          fontSize: 35,
          fontWeight: 700,
        }}
      >
        <h1
          class="ant-menu-item ant-menu-item-only-child"
          role="menuitem"
          key="1"
          style={{
            color: "black",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          INTERIOR DESIGN
        </h1>

        <Menu.Item key="2">ABOUT</Menu.Item>
        <Menu.Item key="3">PORTFOLIO</Menu.Item>
        <Menu.Item key="4">TESTIMONIALS</Menu.Item>
        <Menu.Item key="5">BLOG</Menu.Item>

        <Menu.Item key="6" style={{ float: "right" }}>
          CONTACT
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
