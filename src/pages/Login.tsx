import React from 'react';
import Logo from '../assets/images/logo.svg';
import SigninImg from '../assets/images/signin.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <section className='login'>
        <section className='half_container content p-14'>
          <div className='border w-fit logo'>
            <img src={Logo} alt='LendSqr_logo' />
          </div>
          <div className='flex justify-center items-center border w-fit'>
            <img src={SigninImg} alt='LendSqr_logo' />
          </div>
        </section>
        <section className='half_container form_container'>
          <div className='w-8/12 form_content'>
            <div className='message'>
              <h1>Welcome!</h1>
              <p>Enter details to login</p>
            </div>
            <form>
              <div>
                <input
                  type='email'
                  placeholder='Email'
                  className='border w-full py-4 px-4 rounded-md'
                />
              </div>
              <div className=''>
                <input
                  type='password'
                  placeholder='Email'
                  className='border w-full'
                />
              </div>
              <Link to='/'>Forgot Password?</Link>
              <button>Log In</button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login;
