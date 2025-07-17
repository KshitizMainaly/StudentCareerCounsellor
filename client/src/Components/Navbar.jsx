import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const Navbar = ({ language, setLanguage }) => {
  const { t } = useLanguage();
  
  function clicked(){

setLanguage(language === 'en' ? 'ne' : 'en');
console.log(language);
  
  }
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                EM
              </div>
              <span className="ml-2 text-xl font-bold text-blue-600">EduMatch</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  {t('navbar.home')}
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  {t('navbar.about')}
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  {t('navbar.contact')}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={clicked}
            
              className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              {language === 'en' ? 'नेपाली' : 'English'}
            </button>
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all hover:from-blue-600 hover:to-purple-700"
            >
              {t('navbar.login')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;