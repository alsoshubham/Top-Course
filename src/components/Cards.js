import React from "react";
import Card from "./Card";

const Cards = ({ course }) => {
  console.log("Course", course);

  // Check if course is valid and an object
  if (!course || typeof course !== 'object' || Array.isArray(course)) {
    return <h1>No courses</h1>;
  }

  // Flatten the course categories into a single array
  const getCourse = () => {
    let allCourses = [];
    Object.values(course).forEach((courseCategory) => {
      if (Array.isArray(courseCategory)) {
        allCourses = allCourses.concat(courseCategory);
      }
    });
    return allCourses;
  };

  const coursesList = getCourse();

  // Render the courses
  return (
    <div>
      {coursesList.length === 0 ? (
        <h1>No courses available</h1>
      ) : (
        coursesList.map((courseit) => (
          <Card key={courseit.id} course={courseit} />
        ))
      )}
    </div>
  );
};

export default Cards;
