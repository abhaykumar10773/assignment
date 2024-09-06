
import LeftEmptySpace from './componenet/LeftEmptyspace.jsx';
import TabsWidget from './componenet/TabsWidget.jsx';
import GalleryWidget from './componenet/GalleryWidget.jsx';
import './App.css';


function App() {
  return (
   < div className="main">
    <div className="app-container">
      <LeftEmptySpace />
      <div className="widgets-container">
        <TabsWidget />
        <GalleryWidget />
       
   
      </div>
    </div>
    </div>
  );
}

export default App;
