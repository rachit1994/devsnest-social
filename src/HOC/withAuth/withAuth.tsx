import { useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const withAuth =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  (props: P) => {
    const { currentUser }: any = useAuth();
    let navigate = useNavigate();
    useEffect(() => {
      if (!currentUser) {
        navigate("/login");
      }
    }, [currentUser, navigate]);

    return <Component {...props} />;
  };

export default withAuth;
