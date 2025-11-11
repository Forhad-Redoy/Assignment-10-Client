import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";

const AllCourses = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <MyContainer>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default AllCourses;
