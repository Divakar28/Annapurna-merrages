import React from "react";
import "./App.css";

const RegistrationForm = () => {
  return (
    <div className="container">
      <div className="title-bar">
        <div className="title-img">
          <a href="https://imgbb.com/">
            <img
              src="https://i.ibb.co/zZZV7yK/IMG-20241023-WA0003.jpg"
              alt="Image1"
            />
          </a>
          <a href="https://imgbb.com/">
            <img
              src="https://i.ibb.co/3T6qRhk/IMG-20241023-WA0005.jpg"
              alt="Image2"
            />
          </a>
        </div>
        <button className="am">AM</button>
        <input
          type="text"
          placeholder="Enter ID/E-MAIL/MOBILE"
          className="email-text"
        />
        <input type="password" placeholder="Enter Password" className="password" />
        <button className="login-btn">Login</button>
        <div className="forget-sec">
          <i className="fa fa-lock"></i>
          <p className="forget-text">Forget password?</p>
        </div>
      </div>

      <nav className="nav-elements">
        <div className="el1">
          <p className="element">Home</p>
          <p className="element">About Us</p>
          <p className="element">Careers</p>
          <p className="element">Contact Us</p>
        </div>
        <div className="nav-elements2">
          <p className="element">CMD Desk</p>
          <p className="element">Help</p>
        </div>
      </nav>

      <div className="register-bg">
        <form className="register-form">
          <h1 className="head">Registration free & Get your partner matched</h1>

          <div className="el">
            <p>Name</p>
            <input type="text" placeholder="Enter Your Name" />
          </div>

          <div className="el">
            <p>Surname</p>
            <input type="text" placeholder="Enter Your Surname" />
          </div>

          <div className="el">
            <p>Mobile Number</p>
            <input type="text" placeholder="Enter Number" />
          </div>

          <div className="el">
            <p className="verify-text">
              CLICK <span className="span-text">HERE</span> TO VERIFY YOUR NUMBER
            </p>
          </div>

          <div className="el">
            <p>Email</p>
            <input type="email" placeholder="Enter Email" />
          </div>

          <div className="el">
            <p>Gender</p>
            <input type="radio" id="male" name="gender" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" />
            <label htmlFor="female">Female</label>
          </div>

          <div className="el">
            <p>Date of Birth</p>
            <input type="date" />
          </div>

          <div className="el">
            <label>Marital Status</label>
            <select id="marital-status" name="marital-status">
              <option value="unmarried">Unmarried</option>
              <option value="married">Married</option>
            </select>
          </div>

          <div className="el">
            <label htmlFor="qualification">Qualification:</label>
            <select id="qualification" name="qualification">
              <option value="" selected>
                Select qualification
              </option>
              <option value="highschool">High School</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          <div className="el">
            <label htmlFor="height">Height:</label>
            <select id="height" name="height">
              <option value="">Select..</option>
              <option value="150">150 cm</option>
              <option value="160">160 cm</option>
              <option value="170">170 cm</option>
              <option value="180">180 cm</option>
              <option value="190">190 cm</option>
            </select>
          </div>

          <div className="el">
            <label htmlFor="region">Region:</label>
            <select id="region" name="region">
              <option value="" selected>
                Select Region
              </option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
          </div>

          <div className="el">
            <label htmlFor="caste">Caste:</label>
            <select id="caste" name="caste">
              <option value="" selected>
                Select caste
              </option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </div>

          <div className="el">
            <label htmlFor="profession">Profession:</label>
            <select id="profession" name="profession">
              <option value="" selected>
                Select Profession
              </option>
              <option value="engineer">Engineer</option>
              <option value="doctor">Doctor</option>
              <option value="teacher">Teacher</option>
              <option value="lawyer">Lawyer</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div className="el">
            <p>ENTER CAPTCHA</p>
            <p className="captcha">O Z H 8 M 2</p>
            <input
              type="text"
              placeholder="Type the text displayed above"
            />
          </div>

          <div className="el">
            <p className="verify-text-mobile">
              *Verify Mobile is Mandatory for Registration
            </p>
          </div>

          <div className="el">
            <button className="register-btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
