import Login from "../Login";
import Logout from "../Logout";

export default function ConLogoutLogIn(props) {
  const isLogin = props.isLogin;
  if (isLogin) {
    return <Logout />;
  } else {
    return <Login />;
  }
}
