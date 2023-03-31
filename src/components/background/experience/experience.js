import React from 'react';
import '../../../App.css';

export default function Experience({ title, company, time, description }) {
  return (
    <div className="job-experience">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{time}</p>
      <p>{description}</p>
    </div>
  );
};
