import React, { useState } from 'react';
import "./Calndr.css";



import Calendar from 'react-calendar';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }

  return(
    <div className="containerCalendar">
      <Calendar onChange = {onChange} value = {date}/>
    </div>
  )

};

export default ReactCalendar;
