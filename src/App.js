import React from "react";
import "./App.css";

const RegistrationForm = () => {
    return (
        <div>
            <div className="top-bg">
                <img
                    src="https://i.ibb.co/3T6qRhk/IMG-20241023-WA0005.jpg"
                    alt="Background"
                    border="0"
                />
                <div className="input-elements">
                    <button>AM</button>
                    <input type="text" placeholder="Enter ID/E-Mail/Mobile" />
                    <input type="password" placeholder="Enter Password" />
                    <button className="btn">Login</button>
                    <p className="forget-text">Forget Password?</p>
                </div>
            </div>
            <nav className="nav-elements">
                <div className="el1">
                    <p className="p">Home</p>
                    <p className="p">About Us</p>
                    <p className="p">Careers</p>
                    <p className="p">Contact Us</p>
                </div>
                <div className="el2">
                    <p className="p">CMD Desk</p>
                    <p className="p">Help</p>
                </div>
            </nav>
            <div className="content-bg">
                <form className="form">
                    <h1 className="head">Register for Free & Get Your Partner Matched</h1>
                    <div className="el">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" placeholder="Enter Your First Name" />
                    </div>
                    <div className="el">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" placeholder="Enter Your Last Name" />
                    </div>
                    <div className="el">
                        <label htmlFor="surname">Surname</label>
                        <input type="text" id="surname" placeholder="Enter Your Surname" />
                    </div>
                    <div className="el">
                        <label htmlFor="mobile-number">Mobile Number</label>
                        <input type="text" id="mobile-number" placeholder="Enter Number" />
                    </div>
                    <div className="el">
                        <p className="verify-text">CLICK <span className="span-text">HERE</span> TO VERIFY YOUR NUMBER</p>
                    </div>
                    <div className="el">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="el">
                        <label>Gender</label>
                        <div>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="el">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" />
                    </div>
                    <div className="el">
                        <label htmlFor="marital-status">Marital Status</label>
                        <select id="marital-status" name="marital-status" defaultValue="unmarried">
                            <option value="unmarried">Unmarried</option>
                            <option value="married">Married</option>
                        </select>
                    </div>
                    <div className="el">
                        <label htmlFor="qualification">Qualification:</label>
                        <select id="qualification" name="qualification" defaultValue="">
                            <option value="">Select qualification</option>
                            <option value="highschool">High School</option>
                            <option value="bachelor">Bachelor's Degree</option>
                            <option value="master">Master's Degree</option>
                            <option value="phd">PhD</option>
                        </select>
                    </div>
                    <div className="el">
                        <label htmlFor="height">Height:</label>
                        <select id="height" name="height" defaultValue="">
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
                        <select id="region" name="region" defaultValue="">
                            <option value="">Select Region</option>
                            <option value="north">North</option>
                            <option value="south">South</option>
                            <option value="east">East</option>
                            <option value="west">West</option>
                        </select>
                    </div>
                    <div className="el">
                        <label htmlFor="caste">Caste:</label>
                        <select id="caste" name="caste" defaultValue="">
                            <option value="">Select caste</option>
                            <option value="general">General</option>
                            <option value="obc">OBC</option>
                            <option value="sc">SC</option>
                            <option value="st">ST</option>
                        </select>
                    </div>
                    <div className="el">
                        <label htmlFor="profession">Profession:</label>
                        <select id="profession" name="profession" defaultValue="">
                            <option value="">Select Profession</option>
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
                    </div>
                    <div className="t">
                        <input type="text" placeholder="Type the text displayed above" />
                    </div>
                    <div className="el">
                    <p class="verify-text-mobile">*Verify Mobile is Mandatory for Registration</p>
                    <button class="register-btn">Register</button>
                    </div>
                </form>
                

            </div>
        </div>
    );
};

export default RegistrationForm;
