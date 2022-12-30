import React from 'react';
import Logo from '../assets/images/logo.svg';
import SigninImg from '../assets/images/signin.svg';
import { Link } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import Button from '../components/common/button/Index';

const Login = () => {
  const [showPassword, toggle] = useToggle(false);

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
          <div className='form_content'>
            <div className='message'>
              <h1>Welcome!</h1>
              <p>Enter details to login</p>
            </div>
            <form>
              <div className='border'>
                <input
                  type='email'
                  placeholder='Email'
                  className='input_field'
                />
              </div>
              <div className='border relative password_container'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  className='input_field'
                />
                <span
                  className='absolute top-5 right-4 cursor-pointer'
                  onClick={toggle}
                >
                  Show
                </span>
              </div>
              <Link to='/'>Forgot Password?</Link>
              <Button onClick={() => alert('hello')}>Log In</Button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login;
