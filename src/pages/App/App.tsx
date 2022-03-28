import { FC } from "react";
import AuthProvider from "contexts/AuthContext";
import Routing from "./Routing";
import { Layout } from "antd";
import StoreProvider from "store";

const App: FC = () => (
  <Layout className="full-height">
    <StoreProvider>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </StoreProvider>
  </Layout>
);

export default App;
