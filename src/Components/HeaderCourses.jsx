import React from "react";

const CourseStatue = ["All", "Active", "Completed", "Upcoming"];

function HeaderCourses() {
  return (
    <div>
        <div className="container">
        <h1>My Courses</h1>
      <div className="courses-statue">
        {CourseStatue.map((t) => (
            <span key={t.id}>{t}</span>
        ))}
      </div>
        </div>
    </div>
  );
}

export default HeaderCourses;
