import { useState } from 'react';
import "../styles/TabsWidget.css"
import siderimg from "../assest/siderimg.png"
const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.</p>
          </>
        );
      case 'experiences':
        return (
          <>
            <p>Hello! I’m Dave, and i have experince in software develoer. I’ve been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.</p>
          </>
        );
         case 'recommended':
        return (
          <>
            <p>Hello! I’m Dave, I’ve been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.</p>
          </>
        ); default:
        return null;
    }
  };

  return (
    <div className="tabs-widget flex-column container-fluid d-flex flex-column flex-md-row   mb-0"> 
    <div className="icon   w-16 h-15">
    
    <img src={siderimg} alt="infoimg" className="img-fluid"  style={{height:"160px"   }}  />

        </div>
      <div className="rightside">
    
      
        <nav className="navbar">
    <div className="nav-item  custom-nav-item" onClick={() => setActiveTab('about')}>
   about </div>
    <div className="nav-item custom-nav-item"onClick={() => setActiveTab('experiences')}>
Experiences
    </div>
    <div className="nav-item custom-nav-item"onClick={() => setActiveTab('recommended')}>
Recommended

    </div>
</nav>

      
           <div className="tabs-content">
               {renderContent()}
      </div>
      </div>
    </div>
  );
};

export default TabsWidget;
