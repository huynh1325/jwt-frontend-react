import './Login.scss'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService';

const Login = (props) => {
    let history = useHistory();

    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true
    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    const handleCreateNewAccount = () => {
        history.push('/register')
    }

    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput);

        if (!valueLogin) {
            setObjValidInput({...defaultObjValidInput, isValidValueLogin: false})
            toast.error("Plz enter")
            return
        }
        if (!password) {
            setObjValidInput({...defaultObjValidInput, isValidPassword: false})
            toast.error("Plz enter pw")
            return
        }

        let response = await loginUser(valueLogin, password);

        if (response && response.data && +response.data.EC === 0) {
            // success
            let data = {
                isAuthenticated: true,
                token: 'fake token'
            }
            sessionStorage.setItem("account", JSON.stringify(data));
            history.push('/users');
            window.location.reload();
            //redux
        }

        if (response && response.data && +response.data.EC !== 0) {
            // error
            toast.error(response.data.EM)
        }
    }

    const handlePressEnter = (event) => {
        if (event.keyCode === 13 && event.code === "Enter") {
            handleLogin();
        }
    }

    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-3 px-sm-3">
                    <div className="content-left d-none col-sm-7 d-sm-block">
                        <div className='brand'>
                            Facebook
                        </div>
                        <div className='detail'>
                            Facebook helps you connect and share with the people in your life.
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                        <div className='brand d-sm-none'>
                            Facebook
                        </div>
                        <input
                            type='text'
                            className={objValidInput.isValidValueLogin ? 'form-control' : 'is-invalid form-control'}
                            placeholder='Email address or phone number'
                            value={valueLogin}
                            onChange={(event) => {setValueLogin(event.target.value)}}
                        />
                        <input
                            type='password'
                            className={objValidInput.isValidPassword ? 'form-control' : 'is-invalid form-control'}
                            placeholder='Password'
                            value={password}
                            onChange={(event) => {setPassword(event.target.value)}}
                            onKeyDown={(event) => handlePressEnter(event)}
                        />
                        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
                        <span className='text-center'>
                            <a className='forgot-password' href='/#'>
                                Forgotten password?
                            </a>
                        </span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateNewAccount()}>
                                Create new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login