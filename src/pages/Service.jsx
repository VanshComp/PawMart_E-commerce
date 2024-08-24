import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Scrolling from "../components/Scrolling";
import Advertisement from "../components/Advertisement";

export default function Service() {
  return (
    <>
      <Header />
      <Advertisement/>
      <Sidebar />
      <div className="Services">
        <p className="Service-p">Our Services</p>
        <div className="Service-tag">
          <p className="Service-p1">Premium</p>
          <p className="Service-p2">Pet Services</p>
        </div>
        <div className="Services-all">
          <div className="Service">
            <i
              className="fa-solid fa-house-flag fa-2xl"
              style={{
                color: "#24d527",
                marginLeft: "140px",
                marginTop: "30px",
              }}
            ></i>
            <p className="Service-p3">Pet Boarding</p>
            <p className="Service-p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="Service-p5">Read More</p>
          </div>
          <div className="Service">
            <i
              className="fa-solid fa-drumstick-bite fa-2xl"
              style={{
                color: "#24d527",
                marginLeft: "140px",
                marginTop: "30px",
              }}
            ></i>
            <p className="Service-p3">Pet Feeding</p>
            <p className="Service-p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="Service-p5">Read More</p>
          </div>
          <div className="Service">
            <i
              className="fa-solid fa-group-arrows-rotate fa-2xl"
              style={{
                color: "#24d527",
                marginLeft: "140px",
                marginTop: "30px",
              }}
            ></i>
            <p className="Service-p3">Pet Grooming</p>
            <p className="Service-p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="Service-p5">Read More</p>
          </div>
        </div>
        <div className="Services-all">
          <div className="Service">
            <i
              className="fa-solid fa-shield-cat fa-2xl"
              style={{
                color: "#24d527",
                marginLeft: "140px",
                marginTop: "30px",
              }}
            ></i>
            <p className="Service-p3">Pet Training</p>
            <p className="Service-p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="Service-p5">Read More</p>
          </div>
          <div className="Service">
            <i
              className="fa-solid fa-shield-dog fa-2xl"
              style={{
                color: "#24d527",
                marginLeft: "140px",
                marginTop: "30px",
              }}
            ></i>
            <p className="Service-p3">Pet Exercise</p>
            <p className="Service-p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="Service-p5">Read More</p>
          </div>
          <div className="Service">
            <i
              className="fa-solid fa-notes-medical fa-2xl"
              style={{
                color: "#24d527",
                marginLeft: "140px",
                marginTop: "30px",
              }}
            ></i>
            <p className="Service-p3">Pet Treatment</p>
            <p className="Service-p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="Service-p5">Read More</p>
          </div>
        </div>
      </div>
      <div className="Service-book">
        <div className="Service-booking">
          <div class="Service-container">
            <div class="Service-inputs">
              <label className="Service-label">Your Name</label>
              <input className="Service-input" placeholder="..." />
              <label className="Service-label">Your Email</label>
              <input
                className="Service-input"
                type="email"
                placeholder="example@test.com"
              />
              <label className="Service-label">Reservation Date</label>
              <input className="Service-input" type="date" placeholder="..." />
              <label className="Service-label">Reservation Time</label>
              <input
                className="Service-input"
                type="time"
                placeholder="example@test.com"
              />
              <label className="Service-label">Service</label>
              <input className="Service-input" placeholder="..." />
              <button className="Service-button" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="Service-booking-info">
          <p className="Service-p6">Going for a vacation?</p>
          <div className="Service-booking-info-tag">
            <p className="Service-p7">Book For</p>
            <p className="Service-p8">Your Pets</p>
          </div>
          <p className="Service-p9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            delectus eum, veniam iste dignissimos voluptas, sunt, incidunt
            aliquid error dolor distinctio praesentium harum sed alias quo
            tempora sequi perspiciatis eos!
          </p>
          <div className="Service-booking-slots">
            <div className="Service-booking-slot">
              <div className="Service-booking-slot-info">
                <i
                  className="fa-solid fa-house-flag fa-2xl"
                  style={{
                    color: "#24d527",
                    marginLeft:"110px",
                    marginTop:"40px"
                  }}
                ></i>
                <p className="Service-p10">Pet Boarding</p>
                <p className="Service-p11">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="Service-booking-slot">
              <div className="Service-booking-slot-info">
                <i
                  className="fa-solid fa-drumstick-bite fa-2xl"
                  style={{
                    color: "#24d527",
                    marginLeft:"110px",
                    marginTop:"40px"
                  }}
                ></i>
                <p className="Service-p10">Pet Feeding</p>
                <p className="Service-p11">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="Service-booking-slots">
            <div className="Service-booking-slot">
              <div className="Service-booking-slot-info">
              <i
              className="fa-solid fa-group-arrows-rotate fa-2xl"
              style={{
                color: "#24d527",
                marginLeft:"110px",
                marginTop:"40px"
              }}
            ></i>
            <p className="Service-p10">Pet Grooming</p>
            <p className="Service-p11">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="Service-booking-slot">
              <div className="Service-booking-slot-info">
              <i
              className="fa-solid fa-notes-medical fa-2xl"
              style={{
                color: "#24d527",
                marginLeft:"110px",
                marginTop:"40px"
              }}
            ></i>
            <p className="Service-p10">Pet Treatment</p>
            <p className="Service-p11">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scrolling/>
      <Footer />
    </>
  );
}
