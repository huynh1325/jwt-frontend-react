import "./App.scss";
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Users from "./components/ManageUsers/Users";
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import _ from 'lodash';

function App() {
  const [account, setAccount] = useState({});

  useEffect(() => {
    let session = sessionStorage.getItem('account');
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        {
          account && !_.isEmpty(account) && account.isAuthenticated
          && <Nav />
        }
        <Switch>
          <Route path='/news'>News</Route>
          <Route path='/about'>About</Route>
          <Route path='/contact'>Contacts</Route>
          <Route path='/' exact>Home</Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='*'>404 Not Found</Route>
        </Switch>
      </div>

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
  );
}

export default App;
