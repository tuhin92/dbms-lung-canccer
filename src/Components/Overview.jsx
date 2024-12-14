import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const Overview = () => {
  // Sample data - replace with your actual data
  const genderData = [
    { category: 'Benign', Male: 45, Female: 55 },
    { category: 'Malignant', Male: 65, Female: 35 },
    { category: 'Normal', Male: 50, Female: 50 }
  ];

  const ageData = [
    { range: '20-30', Benign: 10, Malignant: 5, Normal: 85 },
    { range: '31-40', Benign: 20, Malignant: 15, Normal: 65 },
    { range: '41-50', Benign: 30, Malignant: 25, Normal: 45 },
    { range: '51-60', Benign: 25, Malignant: 40, Normal: 35 },
    { range: '61-70', Benign: 15, Malignant: 50, Normal: 20 },
    { range: '71+', Benign: 5, Malignant: 30, Normal: 10 }
  ];

  const smokerData = [
    { type: 'Benign Cases', Smoker: 60, NonSmoker: 40 },
    { type: 'Malignant Cases', Smoker: 80, NonSmoker: 20 },
    { type: 'Normal Cases', Smoker: 30, NonSmoker: 70 }
  ];

  const anxietyData = [
    { name: 'Low Anxiety', value: 40 },
    { name: 'Moderate Anxiety', value: 35 },
    { name: 'High Anxiety', value: 25 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">Lung Cancer Data Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gender Distribution */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Gender Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={genderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Male" fill="#8884d8" />
              <Bar dataKey="Female" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Age Distribution */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Age Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Benign" stackId="a" fill="#8884d8" />
              <Bar dataKey="Malignant" stackId="a" fill="#82ca9d" />
              <Bar dataKey="Normal" stackId="a" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Smoker Distribution */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Smoker vs Non-Smoker</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={smokerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Smoker" fill="#8884d8" />
              <Bar dataKey="NonSmoker" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Anxiety Distribution */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Anxiety Levels</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={anxietyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {anxietyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;