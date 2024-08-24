import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Template1 from "../assets/img/template1.jpeg";
import Template2 from "../assets/img/template2.jpg";
import Template3 from "../assets/img/template3.jpg";
import Template4 from "../assets/img/template4.jpeg";
import Dog from "../assets/img/dogs.jpeg";
import Cat from "../assets/img/cats.jpeg";
import PetFood from "../assets/img/pet-food.jpg";
import Accessories from "../assets/img/accessories.jpeg";
import PetPatt from "../assets/img/pet-patt.jpeg";
import Industry from "../assets/img/industry.png";
import Emergency from "../assets/img/emergency.png";
import Service from "../assets/img/service.png";
import Customer from "../assets/img/customer.jpg";
import YoungMan from "../assets/img/YoungMan.png";
import PetBlog1 from "../assets/img/Pet-blog1.jpeg";
import PetBlog2 from "../assets/img/pet-blog2.jpg";
import PetBlog3 from "../assets/img/pet-blog3.jpg";
import Scrolling from "../components/Scrolling";

export default function Home() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const images = document.querySelectorAll(".Home-template");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    images.forEach((image) => observer.observe(image));

    const scrollAmount = 100;
    const scrollInterval = 2000;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          setTimeout(() => {
            scrollContainer.scrollLeft = 0;
          }, scrollInterval);
        }
      }
    };

    const scrollTimer = setInterval(autoScroll, scrollInterval);

    return () => {
      clearInterval(scrollTimer);
      images.forEach((image) => observer.unobserve(image));
    };
  }, []);

  return (
    <>
      <Header />
      <div className="Home-templates" ref={scrollContainerRef}>
        <img className="Home-template" src={Template1} alt="Template 1" />
        <img className="Home-template" src={Template2} alt="Template 2" />
        <img className="Home-template" src={Template3} alt="Template 3" />
        <img className="Home-template" src={Template4} alt="Template 4" />
      </div>
      <div className="Home-widgets">
        <div className="Home-widget">
          <img className="Home-widget-img" src={Dog} alt="" />
          <div className="Home-widget-info">
            <p className="Home-p">Dogs</p>
            <span className="Home-span">Show All</span>
          </div>
          <p className="Home-p1" style={{ marginLeft: "80px" }}>
            (93)
          </p>
        </div>
        <div className="Home-widget">
          <img className="Home-widget-img" src={Cat} alt="" />
          <div className="Home-widget-info">
            <p className="Home-p">Cats</p>
            <span className="Home-span">Show All</span>
          </div>
          <p className="Home-p1" style={{ marginLeft: "100px" }}>
            (43)
          </p>
        </div>
        <div className="Home-widget">
          <img className="Home-widget-img" src={PetFood} alt="" />
          <div className="Home-widget-info">
            <p className="Home-p">Pet Food</p>
            <span className="Home-span">Show All</span>
          </div>
          <p className="Home-p1" style={{ marginLeft: "90px" }}>
            (58)
          </p>
        </div>
        <div className="Home-widget">
          <img className="Home-widget-img" src={Accessories} alt="" />
          <div className="Home-widget-info">
            <p className="Home-p">Accessories</p>
            <span className="Home-span">Show All</span>
          </div>
          <p className="Home-p1" style={{marginLeft:"20px"}}>(78)</p>
        </div>
      </div>
      <main className="Home">
        <img className="Home-patt-img" src={PetPatt} alt="" />
        <div className="Home-whychose">
          <p className="Home-p2">Why Chose Us?</p>
          <div className="Home-why">
            <span className="Home-span1">Special Care</span>
            <p className="Home-p3">On Pets</p>
          </div>
          <p className="Home-p4">
            We are also dealing with Pet Accessories, Toys, Books, Aviary/Cage
            Design and Construction & Behavioral Training for Pets. For those of
            you that want to know if your bird is a male or female, we can
            collect a blood sample and send it away for DNA testing. We receive
            the test results usually in about a week, with a certificate
            following in about 2 weeks. We pride ourselves on always having very
            clean, healthy pets.
          </p>
          <div className="Home-chose">
            <div className="Home-chose1">
              <img className="Home-chose-img" src={Industry} alt="" />
              <p className="Home-p5">Best In Industry</p>
            </div>
            <div className="Home-chose1">
              <img className="Home-chose-img" src={Emergency} alt="" />
              <p className="Home-p5">Emergency Services</p>
            </div>
          </div>
          <div className="Home-chose">
            <div className="Home-chose1">
              <img className="Home-chose-img" src={Service} alt="" />
              <p className="Home-p5">Special Care</p>
            </div>
            <div className="Home-chose1">
              <img className="Home-chose-img" src={Customer} alt="" />
              <p className="Home-p5">Customer Support</p>
            </div>
          </div>
        </div>
      </main>
      <Sidebar />
      <div className="Home-pricing">
        <p className="Home-p6">Deal of The Day</p>
        <div className="Home-pricing-heads">
          <p className="Home-p7">Choose the</p>
          <span className="Home-span2">Best Price</span>
        </div>
        <div className="Home-pricing-plates">
          <div className="Home-pricing-plate">
            <img className="Home-pricing-pet-img" src={Dog} alt="" />
            <div className="Home-pricing-text">
              <p className="Home-p8" style={{ marginLeft: "25px" }}>
                Basic
              </p>
              <span className="Home-span3">$100</span>
            </div>
            <p className="Home-p9">Feeding</p>
            <p className="Home-p9">Boarding</p>
            <p className="Home-p9" style={{ color: "red" }}>
              Spa & Grooming
            </p>
            <p className="Home-p9" style={{ color: "red" }}>
              Vertinary Medicine
            </p>
            <button className="Home-button">Signup Now</button>
          </div>
          <div className="Home-pricing-plate">
            <img className="Home-pricing-pet-img" src={Cat} alt="" />
            <div className="Home-pricing-text">
              <p className="Home-p8" style={{ color: "rgb(36, 213, 39)" }}>
                Standard
              </p>
              <span className="Home-span3">$300</span>
            </div>
            <p className="Home-p9">Feeding</p>
            <p className="Home-p9">Boarding</p>
            <p className="Home-p9">Spa & Grooming</p>
            <p className="Home-p9" style={{ color: "red" }}>
              Vertinary Medicine
            </p>
            <button className="Home-button">Signup Now</button>
          </div>
          <div className="Home-pricing-plate">
            <img className="Home-pricing-pet-img" src={Dog} alt="" />
            <div className="Home-pricing-text">
              <p className="Home-p8">Premium</p>
              <span className="Home-span3">$500</span>
            </div>
            <p className="Home-p9">Feeding</p>
            <p className="Home-p9">Boarding</p>
            <p className="Home-p9">Spa & Grooming</p>
            <p className="Home-p9">Vertinary Medicine</p>
            <button className="Home-button">Signup Now</button>
          </div>
        </div>
      </div>
      <div className="Home-testimonals">
        <p className="Home-p10">Testimonial</p>
        <div className="Home-testimonal">
          <img className="Home-testimonal-user" src={YoungMan} alt="" />
          <p className="Home-p11">John Wick</p>
          <p className="Home-p12">CEO & Founder Invision</p>
          <i
            className="fas fa-user-check fa-2xl"
            style={{ color: "#ff4000", marginLeft: "125px" }}
          ></i>
          <p className="Home-p13">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <p className="Home-p18">Pet Blog</p>
      <div className="Home-blog-head">
        <span className="Home-span4">Updates</span>
        <p className="Home-p19">From Blog</p>
      </div>

      <div className="Home-blogs">
        <div className="Home-blog">
          <img className="Home-blog-img" src={PetBlog1} alt="" />
          <p className="Home-p14">Top 10 Tips for Successfu...</p>
          <div className="Home-blog-info">
            <i
              className="fa-solid fa-user fa-xl"
              style={{
                color: "#5e5e5e",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            ></i>
            <p className="Home-p15">Admin</p>
            <i
              className="fa-solid fa-eye fa-xl"
              style={{
                color: "#5e5e5e",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            ></i>
            <p className="Home-p15">Most Viewed</p>
            <i
              className="fa-solid fa-comments fa-xl"
              style={{
                color: "#5e5e5e",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            ></i>
            <p className="Home-p15">Comments</p>
          </div>
          <p className="Home-p16">
            Are you looking to sell dogs online but unsure where to start?
            Selling dogs online can be a rewarding venture, but it requires
            careful planning and execution to ensure success. Whether you're a
            breeder or an individual looking to find loving homes for your
            puppies, these top 10 tips will guide you through the process and
            help you achieve your goals.
          </p>
          <p className="Home-p17">Read More</p>
        </div>
        <div className="Home-blog">
          <img className="Home-blog-img" src={PetBlog2} alt="" />
          <p className="Home-p14">Your Guide to Buying Pets...</p>
          <div className="Home-blog-info">
            <i
              className="fa-solid fa-user fa-xl"
              style={{
                color: "#5e5e5e",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            ></i>
            <p className="Home-p15">Admin</p>
            <i
              className="fa-solid fa-eye fa-xl"
              style={{
                color: "#5e5e5e",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            ></i>
            <p className="Home-p15">Most Viewed</p>
            <i
              className="fa-solid fa-comments fa-xl"
              style={{
                color: "#5e5e5e",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            ></i>
            <p className="Home-p15">Comments</p>
          </div>
          <p className="Home-p16">
            In today's digital age, the internet has revolutionized the way we
            do many things, including shopping for pets. While the convenience
            of purchasing a pet online can be appealing, it's crucial to
            approach it with caution and responsibility.
          </p>
          <p className="Home-p17">Read More</p>
        </div>
        <div className="Home-blog">
          <img className="Home-blog-img" src={PetBlog3} alt="" />
          <p className="Home-p14">Golden Retriever Puppies...</p>
          <div className="Home-blog-info">
            <i
              className="fa-solid fa-user fa-xl"
              style={{
                color: "#5e5e5e",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            ></i>
            <p className="Home-p15">Admin</p>
            <i
              className="fa-solid fa-eye fa-xl"
              style={{
                color: "#5e5e5e",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            ></i>
            <p className="Home-p15">Most Viewed</p>
            <i
              className="fa-solid fa-comments fa-xl"
              style={{
                color: "#5e5e5e",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            ></i>
            <p className="Home-p15">Comments</p>
          </div>
          <p className="Home-p16">
            Golden Retriever puppies are undeniably adorable, with their fluffy
            coats and gentle demeanor capturing the hearts of many dog lovers.
            However, as prospective pet owners consider adding one of these
            lovable companions to their family, they may encounter the question:
            are high prices for Golden Retriever puppies worth the investment?
            In this article, we'll delve into the various factors that
            contribute to the value of Golden Retriever puppies, helping you
            make an informed decision.
          </p>
          <p className="Home-p17">Read More</p>
        </div>
      </div>
      <Scrolling/>
      <Footer />
    </>
  );
}
