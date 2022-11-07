import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import ErrorHandler from "./component/ErrorHandler"
import Navbar from "./component/NavBar"
import NestedPage from "./component/NestedPage"
import ErrorPage from "./component/ErrorPage"


function App() {
  //const { refreshUser } = useAuth();
  //useEffect(() => {
    //refreshUser()
  //}, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About/>} >
            <Route path="nested" element={<NestedPage/>} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
export default App