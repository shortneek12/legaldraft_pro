import React from 'react';

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        {/* Draft Builder */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Draft Builder</h2>
          <p className="text-gray-600 mb-4">Describe the bond you need to create and our AI will help draft it.</p>
          <textarea
            className="w-full h-40 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="E.g. Create a corporate bond agreement for a 5-year term with 3.5% interest..."
          ></textarea>
          <button className="mt-4 bg-blue-500 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
            Generate Draft
          </button>
        </div>
        
        {/* Documents List */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Documents</h2>
          <p className="text-gray-600 mb-4">Your recently created and edited bond documents.</p>
          <ul className="space-y-3">
            {/* Add document items here */}
            <li className="flex justify-between items-center p-3 border rounded-lg">Company A Bond Agreement</li>
            <li className="flex justify-between items-center p-3 border rounded-lg">Company B Bond Agreement</li>
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-8">
        {/* Quick Navigation */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Navigation</h2>
          <ul className="space-y-2">
            <li><a href="/subscription" className="text-blue-600 hover:underline">Subscription</a></li>
            <li><a href="/faqs" className="text-blue-600 hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Quick Action */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Action</h2>
          <ul className="space-y-2">
            <li><a href="/dashboard/draft-builder" className="text-blue-600 hover:underline">New Draft</a></li>
            <li><a href="/dashboard/documents" className="text-blue-600 hover:underline">Review Existing Draft</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;