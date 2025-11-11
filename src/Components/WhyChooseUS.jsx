import React from "react";
import { FaUserTie, FaLaptopCode, FaClock, FaGraduationCap, FaDollarSign, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserTie className="text-4xl text-indigo-600" />,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with real-world experience who are passionate about helping you succeed.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
      title: "Hands-On Learning",
      description:
        "Our courses focus on practical projects and interactive lessons so you can apply what you learn immediately.",
    },
    {
      icon: <FaClock className="text-4xl text-indigo-600" />,
      title: "Flexible Learning Options",
      description:
        "Study anytime, anywhere, and at your own pace — perfect for students, professionals, and lifelong learners.",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-indigo-600" />,
      title: "Career-Focused Curriculum",
      description:
        "Every course is designed to help you build in-demand skills and prepare for real career opportunities.",
    },
    {
      icon: <FaDollarSign className="text-4xl text-indigo-600" />,
      title: "Affordable & Accessible",
      description:
        "We believe quality education should be available to everyone. Get premium learning at a fraction of the cost.",
    },
    {
      icon: <FaUsers className="text-4xl text-indigo-600" />,
      title: "Community & Support",
      description:
        "Join a vibrant community of learners and mentors ready to help you grow, collaborate, and stay motivated.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Why Choose <span className="text-indigo-600">Us</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover what makes our learning platform unique and why thousands of learners trust us to reach their goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
