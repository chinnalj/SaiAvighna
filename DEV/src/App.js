import './App.css';
import MainHeader from './Header/MainHeader';
import MainBody from './Body/MainBody';
import PatientList from './Body/PatientList.jsx';
import Postlist from './components/Postlist';
function App() {
  return (
    <div>
      <MainHeader/>
     
      <Postlist/>
    </div>
  );
}

export default App;
