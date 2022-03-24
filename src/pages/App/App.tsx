import { FC } from "react";
import AuthProvider from "contexts/AuthContext";
import Routing from "./Routing";
import { Layout } from "antd";
import { Provider } from 'react-redux';

const App: FC = () => (
  <Layout className="full-height">
      <AuthProvider>
        <Routing />
      </AuthProvider>
  </Layout>
);

export default App;
