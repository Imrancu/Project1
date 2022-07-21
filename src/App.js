import './App.css';
import Home from './components/MainContent/Home';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="flex justify-between">
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
