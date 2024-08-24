import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Aboutus1 from "../assets/img/aboutus1.jpg";
import Aboutus2 from "../assets/img/aboutus2.jpeg";
import Executive from "../assets/img/executive.jpeg";
import Founder from "../assets/img/founder&ceo.jpg";
import Doctor from "../assets/img/team-nurse.jpeg";
import Trainee from "../assets/img/trainee.jpg";
import SocialLinks from '../components/SocialLinks';
import Scrolling from '../components/Scrolling';
import Advertisement from '../components/Advertisement';

export default function About() {
  return (
    <>
      <Header/>
      <Advertisement/>
      <Sidebar/>
      <div className="About">
        <div className="About-aboutus">
            <p className='About-p'>About Us</p>
            <div className="About-head">
                <p className='About-p1'>Boarding</p>
                <p className='About-p2'>&</p>
                <p className='About-p3'>Daycare</p>
            </div>
            <p className='About-p4'>We are proud to say that "We take pride in being pet lovers first, and pet dealers second"</p>
            <p className='About-p5'>We offer everything from finches to Macaws in Birds & Fancy pets to Gaurd Dogs, in all sizes and price ranges. Every Pet is raised at home or with knowledgeable trainer’s facility. As our babies get down to one hand feeding per day, they will be ready to graduate to their new homes. Deposits are accepted at any age, and all new owners are encouraged to come in often, visit and bond with their new family addition.</p>
        <div className="About-ticks">
        <i className="fa-solid fa-check-double fa-xl" style={{color: "#15b800",marginTop:"13px"}}></i>
        <p className='About-p6'>Best In Industry</p>
        </div>
        <div className="About-ticks">
        <i class="fa-solid fa-check-double fa-xl" style={{color: "#15b800",marginTop:"13px"}}></i>
        <p className='About-p6'>Emergency Services</p>
        </div>
        <div className="About-ticks">
        <i class="fa-solid fa-check-double fa-xl" style={{color: "#15b800",marginTop:"13px"}}></i>
        <p className='About-p6'>24/7 Customer Support</p>
        </div>
        <button className='About-button'>Learn More</button>
        </div>
        <div className="About-aboutus-photos">
            <img className='About-img' src={Aboutus1} alt=''/>
            <img className='About-img' src={Aboutus2} alt=''/> 
        </div>
      </div>
      <div className="About-team">
        <p className='About-p7'>Team Memeber</p>
        <div className="About-intro">
        <p className='About-p8'>Meet Our</p>
        <p className='About-p11'>Team Memeber</p>
        </div>
        <div className="About-members">
            <div className="About-member">
                <img className='About-team-img' src={Founder} alt=''/>
                <p className='About-p9'>Adam Joseph</p>
                <p className='About-p10'>Founder & CEO</p>
                <SocialLinks/>
            </div>
            <div className="About-member">
                <img className='About-team-img' src={Executive} alt=''/>
                <p className='About-p9'>Amita Glover</p>
                <p className='About-p10'>Executive</p>
                <SocialLinks/>
            </div>
            <div className="About-member">
                <img className='About-team-img' src={Doctor} alt=''/>
                <p className='About-p9'>Luna</p>
                <p className='About-p10'>Doctor</p>
                <SocialLinks/>
            </div>
            <div className="About-member">
                <img className='About-team-img' src={Trainee} alt=''/>
                <p className='About-p9'>Tulip kate</p>
                <p className='About-p10'>Trainee</p>
                <SocialLinks/>
            </div>
        </div>
      </div>
      <Scrolling/>
      <Footer/>
    </>
  )
}
