import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact us</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Email ID</h2>
          <p className="text-gray-600">legaldraftai@gmail.com</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Contact Number</h2>
          <p className="text-gray-600">+91 7543 456 32647</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Location</h2>
          <p className="text-gray-600">Shruti and Suman Complex, Delhi</p>
        </div>
        <div>
          <label htmlFor="query" className="text-lg font-semibold text-gray-700 block mb-2">Query</label>
          <textarea 
            id="query" 
            className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" 
            placeholder="Write your query and we will surely fix it..."
          ></textarea>
        </div>
        <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUsPage;