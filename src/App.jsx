import Upload from "./Pages/Upload";
import SignIn from "./Pages/SignIn";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <main className="container">
      {isAuthenticated ? <Upload /> : <SignIn />}
    </main>
  );
}

export default App;
