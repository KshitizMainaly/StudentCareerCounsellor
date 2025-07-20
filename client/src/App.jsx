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

function Layout({ language, setLanguage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar language={language} setLanguage={setLanguage} />
      <Outlet />
      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState('en');
  return (
    <Routes>
      <Route path="/" element={<Layout language={language} setLanguage={setLanguage} /> }>
        <Route index element={
          <>
            <Hero language={language} setLanguage={setLanguage} />
            <UserTypeSelector language={language} setLanguage={setLanguage} />
            <Features language={language} setLanguage={setLanguage} />
            <Testimonials language={language} setLanguage={setLanguage} />
          </>
        } />
        <Route path="login" element={<Login language={language} setLanguage={setLanguage} />} />
        <Route path="register/:userType" element={<Register language={language} setLanguage={setLanguage} />} />
      </Route>
    </Routes>
  );
}

export default App;