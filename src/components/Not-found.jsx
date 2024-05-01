import React, { useEffect } from 'react';
import Parallax from 'parallax-js'; // Import Parallax library if you're using it
import './index.scss';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    const parallax = new Parallax(scene); // Initialize Parallax
  }, []); // Ensure the effect runs only once after mounting

  return (
    <article className="wrapper">
      <div className="container">
        <div id="scene" className="scene" data-hover-only="false">
          <div className="circle" data-depth="1.2"></div>
          <div className="one" data-depth="0.9">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
          <div className="two" data-depth="0.60">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
          <div className="three" data-depth="0.40">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
          <p className="p404" data-depth="0.50">404</p>
          <p className="p404" data-depth="0.10">404</p>
        </div>
        <div className="text">
          <article>
            <p>Uh oh! Looks like you got lost. <br />Go back to the homepage if you dare!</p>
            <NavLink to={'/'}>
            <button>Go Home</button>
            </NavLink>
          </article>
        </div>
      </div>
    </article>
  );
};

export default Notfound;
