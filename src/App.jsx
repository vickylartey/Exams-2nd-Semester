
            import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Login";
import SignUp from "./component/SignUp";


function App() {
  //const { refreshUser } = useAuth();
  //useEffect(() => {
    //refreshUser()
  //}, []);

  return (
    //<ErrorBoundary FallbackComponent={ErrorHandler}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
      </Router>
    //</ErrorBoundary>
  );
}
export default App