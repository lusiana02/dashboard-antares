import React from "react";

function MainContent({ selectedTime, setSelectedTime }) {
  return (
    <main className="flex-1 p-6">
      <header className="flex flex-col items-start mb-6">
        <h1 className="text-2xl font-bold">Report</h1>
        <p className="text-gray-500">Evaluate your project through reporting</p>
      </header>
      <div className="flex space-x-4 mb-6">
        <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
          Power Meter
        </button>
        <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
          Water Meter
        </button>
        <button className="py-2 px-4 bg-blue-500 text-white rounded">
          Water Level
        </button>
        <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
          Environment Monitor
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-yellow-100 p-4 rounded flex items-center">
          <img src="./images/Vector-insight.png" alt="Warning Icon" className="mr-3" />
          <div>
            <p className="text-yellow-700">Insight</p>
            <p className="text-gray-700">
                Water level pada seluruh perangkat menunjukkan nilai yang hampir
                sama.
            </p>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded flex items-center">
          <img src="./images/Vector-success.png" alt="Warning Icon" className="mr-3" />
          <div>
            <p className="text-green-700">Data Completion</p>
            <p className="text-gray-700">
                Overall data completion looks OK to us :)
            </p>
          </div>         
        </div>
        <div className="bg-red-100 p-4 rounded flex items-center">
          <img src="./images/Vector-warning.png" alt="Warning Icon" className="mr-3" />
          <div>
            <p className="text-red-700">Warning</p>
            <p className="text-gray-700">There was anomaly on some parameters, please check device(s)</p>
          </div>         
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            This Week
          </button>
          <button className="py-2 px-4 bg-blue-500 text-white rounded">
            This Month
          </button>
          <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Last Month
          </button>
        </div>
        <div className="relative">
          <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            {selectedTime} <i className="fas fa-chevron-down ml-2"></i>
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">1st Degree Water Level</h2>
        <img
          src="./images/waterlevel.png"
          alt="Area chart showing water levels over time"
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Temperature</h2>
          <img
            src="./images/temperature.png"
            alt="Scatter chart showing temperature data"
            className="w-full"
          />
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Overall Data Completion</h2>
          <img
            src="./images/overalldata.png"
            alt="Bar chart showing data completion"
            className="w-full"
          />
        </div>
      </div>
      <div className="bg-green-100 p-4 rounded mb-6 flex items-center">
        <img src="./images/success.png" alt="Warning Icon" className="mr-3" />
        <div>
            <p className="text-green-700">Rekomendasi</p>
            <p className="text-gray-700">
            Nilai pada parameter water level di setiap perangkat menunjukkan hasil
            yang hampir sama. Maka dapat dipastikan, seluruh perangkat bekerja
            dengan baik.
            </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">List SaaS Devices</h2>
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <img
              src="./images/nbiot.png"
              alt="Device 1"
              className="rounded"
            />
            <p className="text-gray-700">NBIOT_WATERLEVEL1</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="./images/nbiot.png"
              alt="Device 2"
              className="rounded"
            />
            <p className="text-gray-700">NBIOT_WATERLEVEL2</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="./images/nbiot.png"
              alt="Device 3"
              className="rounded"
            />
            <p className="text-gray-700">NBIOT_WATERLEVEL3</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
            <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Add new sub sections
            </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Live Report Data</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Type keyword Search"
            className="flex-1 py-2 px-4 border rounded"
          />
          <button className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 ml-4">
            Generate Report
          </button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Device Name</th>
              <th className="py-2 px-4 border-b">Platform ID</th>
              <th className="py-2 px-4 border-b">Device Type</th>
              <th className="py-2 px-4 border-b">Decoder Type</th>
              <th className="py-2 px-4 border-b">Device Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">
                NBIOT_WATERLEVEL1 | P1J202200001
              </td>
              <td className="py-2 px-4 border-b">
                479b2acd-0561-42ac-a38f-4980695ec3c5
              </td>
              <td className="py-2 px-4 border-b">waterlevel</td>
              <td className="py-2 px-4 border-b">Water Meter</td>
              <td className="py-2 px-4 border-b">0102 UTC +7 | 18/09/2024</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                NBIOT_WATERLEVEL2 | P1J202200002
              </td>
              <td className="py-2 px-4 border-b">
                479b2acd-0561-42ac-a38f-4980695ec3c5
              </td>
              <td className="py-2 px-4 border-b">waterlevel</td>
              <td className="py-2 px-4 border-b">Water Meter</td>
              <td className="py-2 px-4 border-b">0102 UTC +7 | 18/09/2024</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                NBIOT_WATERLEVEL3 | P1J202200003
              </td>
              <td className="py-2 px-4 border-b">
                479b2acd-0561-42ac-a38f-4980695ec3c5
              </td>
              <td className="py-2 px-4 border-b">waterlevel</td>
              <td className="py-2 px-4 border-b">Water Meter</td>
              <td className="py-2 px-4 border-b">0102 UTC +7 | 18/09/2024</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                N NBIOT_WATERLEVEL1 | P1J202200001
              </td>
              <td className="py-2 px-4 border-b">
                479b2acd-0561-42ac-a38f-4980695ec3c5
              </td>
              <td className="py-2 px-4 border-b">waterlevel</td>
              <td className="py-2 px-4 border-b">Water Meter</td>
              <td className="py-2 px-4 border-b">0102 UTC +7 | 18/09/2024</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700">5 Data</p>
          <div className="flex space-x-2">
            <button className="py-1 px-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              1
            </button>
            <button className="py-1 px-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              2
            </button>
            <button className="py-1 px-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              3
            </button>
            <button className="py-1 px-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              4
            </button>
            <button className="py-1 px-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              5
            </button>
          </div>
        </div>
        <div  className="flex justify-center mt-4">
            <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mt-4">
            Add new sections
            </button>
        </div>      
      </div>
    </main>
  );
}

export default MainContent;
