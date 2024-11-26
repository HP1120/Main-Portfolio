import React from 'react';
import Navbar from './components/Header';
import ContentBody from './components/ContentBody';
import Introduction from './components/Introduction';
import LatestWorks from './components/LatestWorks';
import Footer from './components/Footer';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentBody />
      <Introduction />
      <LatestWorks />
      <Footer />
    </div>
  );
}

export default App;
