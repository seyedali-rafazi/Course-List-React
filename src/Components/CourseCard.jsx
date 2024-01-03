import React from "react";

function CourseCard({ course }) {
  console.log(course);
  return (
    <div className="container">
      <div className="body">
        <div className="body_img">
          <img src={course.imageUrl} alt="" />
        </div>
        <div className="body_details">
          <DeteailsHeader
            description={course.description}
            title={course.title}
            rate={course.rate}
          />
          <DeteailsFooter course={course} />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

function DeteailsHeader({ title, description, rate }) {
  return (
    <div>
      <div className="details_header">
        <div className="course_details">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="rate">⭐{rate}</div>
      </div>
    </div>
  );
}

function DeteailsFooter({ course }) {
  const startdate = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });
  return (
    <div className="details_footer">
      <div className="tags">
        {course.tags.map((t) => (
          <span key={t.id} className="badge badge--secendry">
            {t}
          </span>
        ))}
      </div>
      <div className="information">
        <div className="date">{startdate}</div>
        <span
          className={`btn badge ${
            course.status == "Active"
              ? "badge--primary"
              : course.status == "Completed"
              ? "badge--secondary"
              : "badge--danger"
          }`}
        >
          {course.status}
        </span>
      </div>
    </div>
  );
}
