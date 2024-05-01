import React from 'react';


const LoginForm = () => {
  const handleLoginHeaderClick = () => {
    document.querySelector('.wrapp').classList.add('active');
  };

  const handleSignupHeaderClick = () => {
    document.querySelector('.wrapp').classList.remove('active');
  };

  return (
    <div className='mx-5'>
    <div data-aos="zoom-in-up" data-aos-duration="1000"  className="wrapp pt-60 hover:shadow-2xl">
      <div className="form signup">
        <header onClick={handleSignupHeaderClick}>Signup</header>
        <form action="#">
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>

      <div className="form login">
        <header onClick={handleLoginHeaderClick}>Login</header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
