import "./App.scss";
import AuthContainer from "./components/auth/AuthContainer";
import PwdLogin from "./components/pwdToggle/PwdToggle";

function App() {
  return (
    <div>
      <AuthContainer />
      <PwdLogin />
    </div>
  );
}

export default App;
