import React from "react";
function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-lavender-700 mb-8 text-center">About Us</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 mb-6">
            Welcome to LavenderApp, where we believe in creating digital experiences 
            that are as beautiful and calming as a field of lavender.
          </p>
          
          <h2 className="text-2xl font-semibold text-lavender-600 mb-4">Our Mission</h2>
          <p className="text-slate-700 mb-6">
            To provide users with applications that not only function flawlessly 
            but also bring a sense of peace and aesthetic pleasure through our 
            carefully crafted lavender color palette.
          </p>

          <div className="bg-lavender-100 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold text-lavender-800 mb-3">Why Lavender?</h3>
            <p className="text-slate-700">
              Lavender represents calmness, elegance, and sophistication. 
              We've incorporated these qualities into every aspect of our application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
