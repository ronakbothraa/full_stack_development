import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';



function App() {
  return (
    <div>
      <Header name="Ronak" color="Mint Green" />
      <Main  greet="and run case"/>
      <Sidebar message="of the guy who ran"/>
    </div>
    )
}

export default App;
