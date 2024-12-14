import React, { useState } from 'react';
import Banner from "../Components/Banner";
import Begining_data from "../Components/Begining_data";
import Malignant from "../Components/Malignant_data/Malignant";
import Normal_data from "../Components/Normal_cases/Normal_data";
import Overview from '../Components/Overview';
import Tools from '../Components/Tools';

const Home = () => {
  const [activeTab, setActiveTab] = useState('benign');

  const tabs = [
    { 
      id: 'benign', 
      label: 'Benign Cases', 
      component: <Begining_data /> 
    },
    { 
      id: 'malignant', 
      label: 'Malignant Cases', 
      component: <Malignant /> 
    },
    { 
      id: 'normal', 
      label: 'Normal Cases', 
      component: <Normal_data /> 
    },
    {
      id: 'overview',
      label: 'Overview',  // Corrected here: 'label' instead of 'lebel'
      component: <Overview />
    },
    {
      id: 'tools',
      label: 'Tools',  // Corrected here: 'label' instead of 'lebel'
      component: <Tools/>
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner />

      <div className="max-w-7xl mx-auto my-12">
        {/* Tab Navigation */}
        <div className="flex border-b mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 
                ${activeTab === tab.id 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div>
          {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default Home;
