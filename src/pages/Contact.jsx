import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Scrolling from "../components/Scrolling";
import Advertisement from "../components/Advertisement";

export default function Contact() {
  const [flipCard, setFlipCard] = useState(false);

  const toggleFlipCard = () => {
    setFlipCard(!flipCard);
  };

  return (
    <>
      <Header />
      <Advertisement/>
      <Sidebar />
      <div className="contact-container">
        <div className="flip-card" onClick={toggleFlipCard}>
          {flipCard ? "Reset" : "Animate"}
        </div>
        <div className={`envelope ${flipCard ? "active" : ""}`}>
          <div className="back paper"></div>
          <div className="content">
            <div className="form-wrapper">
              <form>
                <div className="top-wrapper">
                  <div className="input">
                    <label>Name</label>
                    <input type="text" name="name" />
                  </div>
                  <div className="input">
                    <label>Phone</label>
                    <input type="text" name="phone" />
                  </div>
                  <div className="input">
                    <label>Email</label>
                    <input type="text" name="_replyto" />
                  </div>
                </div>
                <div className="bottom-wrapper">
                  <div className="input">
                    <label>Subject</label>
                    <input type="text" name="_subject" />
                  </div>
                  <div className="input">
                    <label>Message</label>
                    <textarea rows="5" name="message"></textarea>
                  </div>
                  <div className="submit">
                    <div className="submit-card" onClick={toggleFlipCard}>
                      Send Mail
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="front paper"></div>
        </div>
      </div>
      <div className="Contact-quote">
        <div className="Contact-tag">
        <p className="Contact-p">Quote For</p>
        <p className="Contact-p2">The Day!!</p>
        </div>
        
        <p className="Contact-p1">Pets are not just animals; they are fragments of our hearts that stay with us forever, reminding us that unconditional love exists in every wag, purr, and gentle nuzzle. In their short lives, they give us a lifetime of memories, and though their paws may no longer walk beside us, their spirit lives on in every beat of our hearts.</p>
      </div>
      <Scrolling/>
      <Footer />
    </>
  );
}
