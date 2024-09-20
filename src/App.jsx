import React, { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './components/Topbar/Topbar'
import Subheader from './components/Subheader/Subheader'
import Hero from './components/Hero/Hero'
import WhyChoose from './components/WhyChoose/WhyChoose'
import Connect from './components/Connect/Connect'
import AccelerateBusiness from './components/AccelerateBusiness/AccelerateBusiness'
import CountOrder from './components/CountOrders/CountOrder'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className="main">
      <Topbar  setIsOpen={setIsOpen}/>
      {width>980 && <Subheader/>}
      <Hero/>
      <CountOrder/>
      <WhyChoose/>
      <AccelerateBusiness/>
      <Connect/>
      <Footer/>
      {width<=980 && isOpen && <Sidebar setIsOpen={setIsOpen}/>}
      { isOpen && <div className="mask">
      </div>}
    </div>
    </>
  )
}

export default App
