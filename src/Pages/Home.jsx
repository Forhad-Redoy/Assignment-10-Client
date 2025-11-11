import React from 'react';
import { useLoaderData } from 'react-router';
import MyContainer from '../Components/MyContainer';
import CourseCard from '../Components/CourseCard';
import WhyChooseUs from '../Components/WhyChooseUS';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
             <MyContainer>
            <div className='text-center text-5xl font-bold my-7'>Populer Courses</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
      <WhyChooseUs/>
        </MyContainer>
        </div>
    );
};

export default Home;