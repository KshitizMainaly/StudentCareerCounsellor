import { useLanguage } from '../hooks/useLanguage';
import { useParams } from 'react-router-dom';

const Register = ({ language }) => {
  const { t } = useLanguage();
  const { userType } = useParams();
  
  const userTypeLabels = {
    see: language === 'en' ? 'SEE Student' : 'SEE विद्यार्थी',
    plusTwo: language === 'en' ? '+2 Graduate' : '+२ पास आउट',
    bachelor: language === 'en' ? 'Bachelor\'s Graduate' : 'स्नातक पास आउट'
  };
  
  return (
    <section className="py-20">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {language === 'en' ? 'Register as ' : 'दर्ता गर्नुहोस् '} 
          {userTypeLabels[userType]}
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'en' ? 'Full Name' : 'पुरा नाम'}
            </label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'en' ? 'Password' : 'पासवर्ड'}
            </label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {language === 'en' ? 'Register' : 'दर्ता गर्नुहोस्'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;