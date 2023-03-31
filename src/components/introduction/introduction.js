import '../../App.css';
import imgDouglas from '../../images/douglas.jpg';
import ScrollIndicator from '../scrollIndicator/scrollIndicator';

export default function Introduction() {
  return (
    <div className="App-header">
      <div className='container'>
        <img src={imgDouglas} alt="douglas" />
        <p>Hey There 👋</p>
        <p>
          I am a versatile,
          human-centered developer passionate about creating meaningful experiences through games,
          web apps, and other digital products.
          I have a background in design and product development
          and have worked as a service designer in the public sector
          as well as created countless little games and web apps by myself.
          I am currently working on the collaborative writing game Unwritten
          while actively seeking new projects and collaborations
          in both the indie game and web app development sectors.
        </p>
        <p>
          Want to create good stuff with me? Please reach out!
        </p>
      </div>
    </div>
  );
}