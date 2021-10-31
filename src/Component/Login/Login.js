import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className='login-form'>
            {/* Log in Section */}
            <div className="signin-area text-center border border-1 border-secondary rounded-2 mt-4 login-container h-50 ">
                <h3 className='text-center fs-1'><i className="fas fa-user"></i> </h3>
                <h3>User Login</h3>
                <div>
                    <button className="g-btn"
                        onClick={handleGoogleLogin}
                    ><i className="fab fa-google"></i> Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;