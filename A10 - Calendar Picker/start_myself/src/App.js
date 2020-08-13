import React, {useState} from 'react';
import './App.css';

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

export default function App() {
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

  return (
    <>
      <div className="date-chooser">
        <button className="date-chooser-button">
          Start Date <span>{startDate}</span>
        </button>
        <button className="date-chooser-button">
          End Date <span>{endDate}</span>
        </button>
      </div>

      <div className="calendar">
        {calendarDates.map((day, index) => {
          return <div className="calendar-day">{day + 1}</div>;
        })}
      </div>
    </>
  );
}
