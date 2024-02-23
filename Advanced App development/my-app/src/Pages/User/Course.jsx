import React from "react";
import CourseData from "./data";
import "/src/assets/Css/courseList.css";

const Course = () => {
  const getImageById = (id) => {
    const course = CourseData.find((item) => item.id === id);
    if (course) {
      return course.img;
    }
    return null;
  };

  return (
    <div className="course_container">
      {CourseData.map((data) => (
        <div className="box" key={data.id}>
          <div className="box-content">
            <div className="image-box">
              <img
                src={data.img}
                alt={data.courseName}
                className="course-image"
              />
            </div>
            <div className="image-box-details">
              <div className="image-box-details-info">
                <h3>{data.courseName}</h3>
                <p>Exam Format: {data.examFormat}</p>
                <p>No. of Papers: {data.Noofpapers}</p>
                <p>Exam Length: {data.ExamLength}</p>
                <button className="enroll-button">Enroll</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
