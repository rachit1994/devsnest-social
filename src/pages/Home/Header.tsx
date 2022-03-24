import { FC } from "react";
import { Layout, Menu } from "antd";
import navs from "constants/navs";

const { Header } = Layout;

const HomeHeader: FC = () => (
    <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {navs.map((obj, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{obj.title}</Menu.Item>;
          })}
        </Menu>
      </Header>
);

export default HomeHeader;
