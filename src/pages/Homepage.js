import React from 'react';
import Navbar from '../components/navbar.jsx';
 import Header from '../components/header.jsx';
import Logo from '../components/logo.jsx';
import Gpt3 from '../components/gpt3.jsx';
import Future from '../components/future.jsx';
import Feature from '../components/feature.jsx';
import Feature2 from '../components/feature2.jsx';
import Feature3 from '../components/feature3.jsx';
import Blog from '../components/blog.jsx';
import Footer from '../components/footer.jsx';
import Feature4 from '../components/feature4.jsx';



const Homepage = () => {
  return (
    <div className="bg-[#13304d]">
      <Navbar />
      <Header/>
      <Logo/>
      <Gpt3/>
      <Future/>
      <Feature/>
      <Feature2/>
      <Feature3/>
      <Blog/>
      <Feature4/>
      <Footer/>
      
     

      
    </div>
  );
};

export default Homepage;
