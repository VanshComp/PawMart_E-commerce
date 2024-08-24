import React from 'react';

export default function Selling() {
  return (
    <div className="body">
      <div className="container">
        <div className="title">
          Hey!! Partner With Us
        </div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <label className="details">Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="input-box">
                <label className="details">State</label>
                <input type="text" placeholder="Enter your state" required />
              </div>
              <div className="input-box">
                <label className="details">Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <label className="details">Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="input-box">
                <label className="details">City</label>
                <input type="text" placeholder="Enter your city" required />
              </div>
              <div className="input-box">
                <label className="details">Pet Category</label>
                <select className='Selling-select' required>
                  <option className='Selling-option' value="">Select Pet Category</option>
                  <option className='Selling-option' value="dogs">Dogs</option>
                  <option className='Selling-option' value="cats">Cats</option>
                  <option className='Selling-option' value="birds">Birds</option>
                  <option className='Selling-option' value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="gender-details">
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <input type="radio" name="gender" id="dot-1" />
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <input type="radio" name="gender" id="dot-2" />
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Join" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
