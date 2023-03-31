import '../../App.css';
import ScrollIndicator from '../scrollIndicator/scrollIndicator';

export default function Header() {
  return (
    <header className="App-header">
      <div>
        <h1>Douglas Driving</h1>
        <h3>Crafting games, apps, and other cool products ✍️</h3>
      </div>
      <ScrollIndicator />
    </header>
  );
}