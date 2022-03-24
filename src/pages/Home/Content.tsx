import { FC } from "react";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

const HomeContent: FC = () => (
  <Content style={{ padding: "0 50px" }} className="white-background">
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-content">Content</div>
  </Content>
);

export default HomeContent;
