import { FC } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import navs from "constants/navs";
import Header from './Header';
import Content from './Content';
import Footer from 'components/Footer'

const Home: FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default Home;
