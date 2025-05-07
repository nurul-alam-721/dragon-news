import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {loginUser, setUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result=>{
            console.log(result.user);
            setUser(result.user);
           navigate(`${location.state ? location.state : "/"}`);
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
          <div className=' flex bg-base-200 min-h-screen justify-center items-center'>
            <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
              <form onSubmit={handleLogin}>
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button type='submit' className="btn btn-neutral mt-4" >Login</button>
              </form>
              <p>Don't Have an Account? Please <Link to={'/auth/register'}><span className='text-blue-400 underline font-semibold'>Register</span></Link></p>
            </div>
          </div>
          </div>
    
    );
};

export default Login;