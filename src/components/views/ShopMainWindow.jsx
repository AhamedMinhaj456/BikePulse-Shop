import React, { useState } from 'react';
import './ShopMainWindow.css'; // Import your custom CSS file
import LeftSidebar from '../../components/common/LeftSidebar';
import RightSidebar from '../../components/common/RightSidebar';
import Navbar from '../../components/ShopRegister/navbar';
import Footer from '../../components/ShopRegister/Footer';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const ShopMainWindow = () => {
  const [date, setDate] = useState(new Date());
  const [schedules, setSchedules] = useState([
    { start: new Date(), end: new Date(), title: 'Meeting with team', completed: false },
    { start: new Date(new Date().setDate(new Date().getDate() + 1)), end: new Date(new Date().setDate(new Date().getDate() + 1)), title: 'Client call', completed: false },
    { start: new Date(new Date().setDate(new Date().getDate() + 2)), end: new Date(new Date().setDate(new Date().getDate() + 2)), title: 'Project deadline', completed: false },
  ]);
  const [newSchedule, setNewSchedule] = useState('');

  const handleAddSchedule = () => {
    if (newSchedule.trim()) {
      setSchedules([...schedules, { start: date, end: date, title: newSchedule, completed: false }]);
      setNewSchedule('');
    }
  };

  const handleToggleSchedule = (event) => {
    const updatedSchedules = schedules.map(schedule =>
      schedule === event ? { ...schedule, completed: !schedule.completed } : schedule
    );
    setSchedules(updatedSchedules);
  };

  const handleDeleteSchedule = (event) => {
    const updatedSchedules = schedules.filter(schedule => schedule !== event);
    setSchedules(updatedSchedules);
  };

  return (
    <div className="shop-main-container">
      
      <div className="shop-main">
        <LeftSidebar />
        <div className="shop-main-middle">
          <h1>Welcome to Shop Dashboard</h1>
          <div className="calendar-overview">
            <div className="calendar">
              <h2>Calendar Schedule</h2>
              <Calendar
                localizer={localizer}
                events={schedules}
                startAccessor="start"
                endAccessor="end"
                defaultDate={new Date()}
                selectable
                onSelectSlot={(slotInfo) => {
                  setDate(slotInfo.start);
                  setNewSchedule('');
                }}
                onSelectEvent={(event) => handleToggleSchedule(event)}
                eventPropGetter={(event, start, end, isSelected) => ({
                  className: isSelected ? 'selected-event' : ''
                })}
              />
              <div className="schedule">
                <h2>Schedule for {moment(date).format('LL')}</h2>
                <div className="schedule-input">
                  <input
                    type="text"
                    value={newSchedule}
                    onChange={(e) => setNewSchedule(e.target.value)}
                    placeholder="Add a new schedule..."
                  />
                  <button onClick={handleAddSchedule}>Add</button>
                </div>
                <ul className="schedules">
                  {schedules.map((schedule, index) => (
                    <li key={index} className={schedule.completed ? 'completed' : ''}>
                      <span onClick={() => handleToggleSchedule(schedule)}>{schedule.title}</span>
                      <button onClick={() => handleDeleteSchedule(schedule)}>Delete</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <RightSidebar />
      </div>
     
    </div>
  );
};

export default ShopMainWindow;