import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Navigation from './components/Navigation/Navigation';
function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navigation/>
      <MainContent/>
    </div>
  );
}

export default App;
