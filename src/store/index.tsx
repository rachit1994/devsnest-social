import { FC } from "react";
import configureStore from "./configureStore";
import { Provider } from "react-redux";

const initialState = {};

const store = configureStore(initialState);


const StoreProvider: FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default StoreProvider;
