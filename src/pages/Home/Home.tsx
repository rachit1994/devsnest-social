import { FC, useEffect } from "react";
import { Layout } from "antd";
import Header from './Header';
import Content from './Content';
import Footer from 'components/Footer'
import { useInjectReducer } from "redux-injectors";
import userReducer from "commonRedux/reducer/users.reducers";
import { connect } from 'react-redux';
import { setUser } from "commonRedux/actions/users.actions";
import { UserInterface } from "commonRedux/reducer/users.reducers";
import { AppDispatch, RootState } from "store";

interface HomeProps {
  updateUser: Function
}

const Home: FC<HomeProps> = ({ updateUser }) => {
  useInjectReducer({ key: "user", reducer: userReducer });
  useEffect(()=> {
    updateUser({ name: 'rachit' })
  }, [updateUser]);

  return (
    <Layout className="layout">
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

const mapStateToProps = (state: RootState) => {
  console.log('coming in state', state);
  return {
    user: {}
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    updateUser: (user: UserInterface) => dispatch(setUser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
