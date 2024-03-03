import React, { useState, useRef } from "react";
import "/src/assets/Css/home.css";
import { IoCall } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import img1 from "/src/assets/Images/home_img/learn.jpg";
import img2 from "/src/assets/Images/home_img/org.jpg";
import img3 from "/src/assets/Images/home_img/instructor.jpg";
import c1 from "/src/assets/Images/home_img/c1.jpg";
import c2 from "/src/assets/Images/home_img/c2.jpeg";
import c3 from "/src/assets/Images/home_img/c3.jpeg";
import c4 from "/src/assets/Images/home_img/c4.jpeg";
import c5 from "/src/assets/Images/home_img/c5.jpeg";

import p1 from "/src/assets/Images/home/p1.jpg";
import p2 from "/src/assets/Images/home/p2.jpg";
import p3 from "/src/assets/Images/home/p3.jpg";
// import { FaChevronDown } from "react-icons/fa";
const Homepage = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
    setIsScrolled(true);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsScrolled(false);
    }, 4000);
  };

  const handleGetStartedClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div className="home-container-top">
        <div className="home-container-top-wrapper">
          <div className="home-container-top-wrapper-left">
            <h1>Welcome to the BEC Enquiry Management System</h1>
            <p>
              The BEC Enquiry Management System (EMS) is transforming the way
              candidates engage with our certification program. Our
              user-friendly platform simplifies the process of submitting
              enquiries, provides comprehensive information on the BEC
              certification program, and streamlines the registration process.
            </p>
            <p>
              With real-time responses from our dedicated support staff,
              communication gaps are bridged, ensuring that candidates receive
              timely and accurate information. Our innovative system is designed
              to enhance the candidate experience, alleviating frustration and
              empowering informed decision-making.
            </p>
          </div>
          <div className="home-container-top-wrapper-right"></div>
        </div>
        <div className="home-container-top-bottom-head">
          <h1>We help people learn English and prove</h1>
          <h1>their skills to the world</h1>
        </div>
        <button className="home-button" onClick={handleGetStartedClick}>
          <span>GET STARTED</span>
        </button>
      </div>
      <div className="card-container">
        {/* First card */}
        <div className="card">
          <h3>Support for learners</h3>
          <img className="home-img" src={img1} alt="Learners" />
          <p>
            Free activities and advice if you're preparing for one of our exams
            or want to improve your English.
          </p>
        </div>

        {/* Second card */}
        <div className="card">
          <h3>Support for organizations</h3>
          <img className="home-img" src={img2} alt="Organizations" />
          <p>
            Tools and resources to help your organization make the most of our
            exams and tests.
          </p>
        </div>

        {/* Third card */}
        <div className="card" ref={ref}>
          <h3>Support for instructors</h3>
          <img className="home-img" src={img3} alt="Instructors" />
          <p>
            Classroom materials, teaching resources, and professional
            development opportunities.
          </p>
        </div>
      </div>
      <div
        className="home-middle-container-wrapper"
        style={{ padding: "30px" }}
      >
        <div className="home-middle-container-first">
          <div className="home-content-1">
            <div className="home-content-container-1">
              <h1>Your path to learning English, step by step</h1>
              <p>
                More than 25,000 organisations in 130 countries around the world
                rely on our secure exams and tests as proof of English language
                ability.
              </p>
            </div>
          </div>
          <div className="middle-img-container-1">
            <img className="middle-img-container-1-img" src={c1} />
          </div>
        </div>

        <div className="home-middle-container-first">
          <div className="middle-img-container-2">
            <img className="middle-img-container-2-img" src={c2} />{" "}
          </div>
          <div className="home-content-2">
            <div className="home-content-container-2">
              <h1>The world’s most recognised exams and tests</h1>
              <p>
                Cambridge English Qualifications are in-depth exams that make
                learning English enjoyable, effective and rewarding. Our unique
                approach encourages continuous progression with a clear path to
                improve language skills. We have qualifications for schools,
                general and higher education, and business.
              </p>
            </div>
          </div>
        </div>
        <div className="home-middle-container-first">
          <div className="home-content-1">
            <div className="home-content-container-1">
              <h1>Together we inspire learners to go further</h1>
              <p>
                Our range of free teaching resources, lesson plans and
                activities is designed to help you prepare your students for our
                exams and tests. We also have a range of teaching
                qualifications, courses and support to help you develop as a
                teacher.
              </p>
            </div>
          </div>
          <div className="middle-img-container-1">
            <img className="middle-img-container-1-img" src={c3} />
          </div>
        </div>

        <div className="home-middle-container-first">
          <div className="middle-img-container-2">
            <img className="middle-img-container-2-img" src={c4} />{" "}
          </div>
          <div className="home-content-2">
            <div className="home-content-container-2">
              <h1>The accurate English test with fast results</h1>
              <p>
                Linguaskill is a quick and convenient online test to help higher
                education institutions and employers check the English levels of
                individuals and groups of candidates. It combines the latest AI
                technology with the reliability and quality you expect from
                Cambridge.
              </p>
            </div>
          </div>
        </div>
        <div className="home-middle-container-first">
          <div className="home-content-1">
            <div className="home-content-container-1">
              <h1>Test Your English</h1>
              <p>
                Try our quick, free online tests to find out what your level of
                English is, and which Cambridge English Qualification might be
                best for you. There are tests suited for every level, and at the
                end you will get recommendations on how to improve your English.
              </p>
            </div>
          </div>
          <div className="middle-img-container-1">
            <div className="about-container-wrapper">
              <img className="middle-img-container-1-img" src={c5} />
            </div>
          </div>
        </div>
        <div className="about-container">
          <div className="about-container-header">
            <h1>Want to improve your English?</h1>
            <p>
              Practice material and learning resources to help you improve your
              English.
            </p>
          </div>
          <div className="about-container-body">
            <div className="about-container-card">
              <img src={p1} />
            </div>
            <div className="about-container-card">
              <img src={p2} />
            </div>
            <div className="about-container-card">
              <img src={p3} />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-top">
          <div className="contact-top-header">
            <div className="contact-head-wrapper">
              <h1>Get in touch</h1>
              <p>
                Want to get in touch?, We love to hear from you.Here is how you
                can reach us
              </p>
            </div>
          </div>
          <div className="contact-top-img"></div>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom-card">
            <IoCall style={{ fontSize: "54px" }} />
            <h1>Talk to customer Services</h1>
            <div className="contact-bottom-card-wrapper">
              <p>
                Any Queries regarding our course? just pick up the phone and
                chat with a member of our Service Team
              </p>
              <p>+91 1234567890</p>
            </div>
          </div>
          <div className="contact-bottom-card">
            <h1>Get connected with us</h1>
            <div className="contact-icons">
              <FaWhatsappSquare className="con-icon" />
              <FaFacebook className="con-icon" />
              <FaTwitter className="con-icon" />
              <FaInstagramSquare className="con-icon" />
            </div>
            <button className="contact-link-bottom-card">Get connected</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
