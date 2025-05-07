import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo, email, password);

    setErrorMessage('');
    
    createUser(email, password)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <div className="card mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister}>
            <label className="label">Name</label>
            <input type="text" name="name" className="input bg-white" placeholder="Name" required />

            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input bg-white" placeholder="PhotoURL" required />

            <label className="label">Email</label>
            <input type="email" name="email" className="input bg-white" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input bg-white" placeholder="Password" required />

            <button type="submit" className="btn btn-neutral mt-4">Register</button>
          </form>

          <p className="mt-2">
            Already Have an Account? Please{' '}
            <Link to="/auth/login" className="text-blue-400 underline font-semibold">Login</Link>
          </p>

          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
