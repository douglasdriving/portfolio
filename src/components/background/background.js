import React from 'react';
import '../../App.css';
import Experience from './experience/experience';

//++could make these smart! turn each experience into a component and feed it props

const Background = () => {
  return (
    <div className="App-header">
      <div className='background'>

        <h2>💼 Experience</h2>

        <Experience
          title="Service Designer"
          company="Samordningsförbundet Centrala Östergötland"
          time="Sept 2020 - Dec 2021"
          description="Worked on a variety of projects aimed at assisting people far from the labour market in Sweden. Tasks included user research, user testing, workshop facilitation, and digital product development."
        />

        {/* <h2>🎓 Education</h2>
        <div className="education">
          <h3>Degree, Institution Name</h3>
          <p>Duration: Month Year - Month Year</p>
          <ul>
            <li>Relevant coursework or projects #1</li>
            <li>Relevant coursework or projects #2</li>
            <li>Relevant coursework or projects #3</li>
          </ul>
        </div> */}

      </div>
    </div>
  );
};

export default Background;
