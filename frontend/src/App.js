import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [employeeName, setEmployeeName] = useState('');
  const [hours, setHours] = useState('');
  const [records, setRecords] = useState([]);

  const submitTimesheet = async () => {
    await axios.post('http://localhost:5000/api/timesheet', {
      employeeName,
      hours,
    });
    fetchRecords();
  };

  const fetchRecords = async () => {
    const response = await axios.get('http://localhost:5000/api/timesheet');
    setRecords(response.data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div>
      <h1>Employee Timesheet</h1>
      <input
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        placeholder="Employee Name"
      />
      <input
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        placeholder="Hours Worked"
      />
      <button onClick={submitTimesheet}>Submit</button>
      <ul>
        {records.map((r, i) => (
          <li key={i}>
            {r.employeeName} - {r.hours} hrs
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
