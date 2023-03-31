import './App.css';
import Header from './components/header/header';
import Introduction from './components/introduction/introduction';
import Background from './components/background/background';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction/>
      <Background/>
    </div>
  );
}

export default App;
