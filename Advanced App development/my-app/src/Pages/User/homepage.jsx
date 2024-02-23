import React from "react";
import "/src/assets/Css/home.css";
import img1 from "/src/assets/Images/home_img/learn.jpg";
import img2 from "/src/assets/Images/home_img/org.jpg";
import img3 from "/src/assets/Images/home_img/instructor.jpg";
import c1 from "/src/assets/Images/home_img/c1.jpg";
import c2 from "/src/assets/Images/home_img/c2.jpeg";
import c3 from "/src/assets/Images/home_img/c3.jpeg";
import c4 from "/src/assets/Images/home_img/c4.jpeg";
import c5 from "/src/assets/Images/home_img/c5.jpeg";

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="home-container-top">
        <h2 className="protest-revolution-regular">Welcome to our page!</h2>
        <h1 className="home-h1">IT'S NICE TO MEET YOU</h1>
        <button className="home-button">GET STARTED</button>
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
        <div className="card">
          <h3>Support for instructors</h3>
          <img className="home-img" src={img3} alt="Instructors" />
          <p>
            Classroom materials, teaching resources, and professional
            development opportunities.
          </p>
        </div>
      </div>
      <div className="home-middle-container-wrapper">
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
            <img className="middle-img-container-1-img" src={c5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
