import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="Footer-i">
        <div className="Footer-company">
            <div className="Footer-company-name">
            <span className='Footer-span'>Pet</span>
            <p className='Footer-p'>Mart</p>
            </div>
            <p className='Footer-p1'>Our job is to give you, our customer very happy and healthy pet. We know how much you love your pets because we love ours too. We are committed to continually learning more about pet care, products and nutrition. We promise we will always do our best for you and the animals you love.</p>
        </div>
        <div className="Footer-locations">
            <p className='Footer-p2'>Get In Touch</p>
            <div className="Footer-location">
            <i className="fa-solid fa-location-dot fa-xl" style={{color: "#ffffff"}}></i>
            <p className='Footer-p3'>Location, City,Country</p>
            </div>
            <div className="Footer-location">
            <i className="fa-solid fa-phone fa-xl" style={{color: "#ffffff"}}></i>
            <p className='Footer-p3'>+91 2345678</p>
            </div>
            <div className="Footer-location">
            <i className="fa-solid fa-envelope fa-xl" style={{color: "#ffffff"}}></i>
            <p className='Footer-p3'>email@gmail.com</p>
            </div>
        </div>
        <div className="Footer-links">
            <p className='Footer-p4'>Popular Links</p>
            <div className="Footer-link">
            <i className="fa-solid fa-chevron-right fa-sm" style={{color: "#ffffff"}}></i>
            <a href='/' className='Footer-a'>Home</a>
            </div>
            <div className="Footer-link">
            <i className="fa-solid fa-chevron-right fa-sm" style={{color: "#ffffff"}}></i>
            <a href='/' className='Footer-a'>About Us</a>
            </div>
            <div className="Footer-link">
            <i className="fa-solid fa-chevron-right fa-sm" style={{color: "#ffffff"}}></i>
            <a href='/' className='Footer-a'>Our Services</a>
            </div>
            <div className="Footer-link">
            <i className="fa-solid fa-chevron-right fa-sm" style={{color: "#ffffff"}}></i>
            <a href='/' className='Footer-a'>Our Team</a>
            </div>
            <div className="Footer-link">
            <i className="fa-solid fa-chevron-right fa-sm" style={{color: "#ffffff"}}></i>
            <a href='/' className='Footer-a'>Our Contact</a>
            </div>
        </div>
        <div className="Footer-newuser">
            <p className='Footer-p5'>NewUser</p>
            <input className='Footer-input' placeholder='Name'/>
            <div className="v"></div>
            <input className="Footer-input" placeholder='Email' style={{marginTop:"8px"}}/>
            <div className="v"></div>
            <button className='Footer-button'>Submit</button>
        </div>
      </div>
      <div className="Footer-ii">
        <div className="Footer-copyright">
      <i className="fa-regular fa-copyright fa-lg" style={{color: "#ffffff", marginTop:"12px",marginLeft:"70px"}}></i>
      <span className='Footer-span1'>PetMart</span>
        <p className="Footer-p6">. All Rights Reserved. Designed by </p>
        <span className='Footer-span1'>PetMart</span>
        </div>
        <div className="Footer-foot-options">
            <p className='Footer-p7'>Privacy</p>
            <p className='Footer-p7'>Terms</p>
            <p className='Footer-p7'>FAQs</p>
            <p className='Footer-p7'>Help</p>
        </div>
      </div>
    </footer>
  )
}
