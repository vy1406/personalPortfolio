import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <>
      <header className="sticky-header">
        <span id="black_top"></span>
        <img src={reactLogo} height="80px" width="80px" id="logo_header" alt="Logo" />
        <nav id="top_nav">
          <hr style={{ marginTop: '20px', marginBottom: '20px' }} id="top_rule" />
          <ul>
            <li className="list_item">
              <a href="#" className="nav_links">
                Home
              </a>
            </li>
            <span className="nav_bullets">&#8226;</span>
            <li className="list_item">
              <a href="#" className="nav_links">
                Collections
              </a>
            </li>
            <span className="nav_bullets">&#8226;</span>
            <li className="list_item">
              <a href="#" className="nav_links">
                Learn
              </a>
            </li>
            <span className="nav_bullets">&#8226;</span>
            <li className="list_item">
              <a href="#" className="nav_links">
                About
              </a>
            </li>
            <span className="nav_bullets">&#8226;</span>
            <li className="list_item">
              <a href="#" className="nav_links">
                Sign Up
              </a>
            </li>
            <span className="nav_bullets">&#8226;</span>
            <li className="list_item">
              <a href="#" className="nav_links">
                Login
              </a>
            </li>
            <span className="nav_bullets">&#8226;</span>
            <li className="list_item">
              <span className="nav_links" id="search">
                Search
              </span>
            </li>
            <input
              type="text"
              id="search_field"
              style={{ width: '90%', height: '100%', outlineColor: '#75B4FF' }}
            />
          </ul>
          <hr style={{ marginTop: '20px', color: '#D6D6D6' }} id="bottom_rule" />
        </nav>
      </header>

      <div id="news_block" style={{height: "1000px"}}>
        <div className="article">
          <img src="images/pic_1.jpg" height="370px" width="425px" className="image" alt="Article" />
          <center>
            <h2>
              <a href="#" className="nav_links">
                Lorem ipsum dolor sit amet
              </a>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </center>
        </div>

        <div className="smaller_images">
          <img
            src="images/pic_2.jpg"
            height="250px"
            width="300px"
            className="image"
            alt="Smaller Article"
          />
          <h2>
            <a href="#" className="nav_links">
              Lorem ipsum dolor sit amet
            </a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
