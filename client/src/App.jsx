import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import UserTypeSelector from './Components/UserTypeSelector';
import Features from './Components/Features';
import Testimonials from './Components/Testimonial';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';

function Layout() {
  const [language, setLanguage] = useState('en');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar language={language} setLanguage={setLanguage} />
      <Outlet />
      <Footer language={language} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <>
            <Hero />
            <UserTypeSelector />
            <Features />
            <Testimonials />
          </>
        } />
        <Route path="login" element={<Login />} />
        <Route path="register/:userType" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;