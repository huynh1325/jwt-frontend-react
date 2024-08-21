import "./App.scss";
import Nav from './components/Navigation/Nav';
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";
import { Rings } from "react-loader-spinner";
import { useContext } from "react";
import { UserContext } from "./contextt/UserContext";

function App() {
  const { user } = useContext(UserContext)
  return (
    <>
      <Router>
        {user && user.isLoading ?
          <div className="loading-container">
            <Rings
              visible={true}
              height="80"
              width="80"
              color="#1877f2"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <div>Loading data...</div>
          </div>
          :
          <>
            <div className="app-header">
              <Nav />
            </div>
            <div className="app-container">
              <AppRoutes />
            </div>
          </>
        }

        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: Bounce,
        />
      </Router>
    </>
  );
}

export default App;
