import { useState } from 'react';
import SignUpForm from '../../Pages/SignUp';


const SignUpFlow = () => {
  const [showModal, setShowModal] = useState(true);
  const [userType, setUserType] = useState(null);

  const handlePathSelection = (type) => {
    setUserType(type);
    setShowModal(false);
  };

  return (
    <>
      {!showModal && userType ? (
        <SignUpForm userType={userType} />
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Choose Your Role</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 mb-8 text-center">
              Select how you would like to use our platform
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handlePathSelection('service_provider')}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#68b5c2] transition-all group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-all">
                    <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">I am a Service Provider</h3>
                  <p className="text-gray-500 text-center text-sm">I want to offer my services to clients</p>
                </div>
              </button>

              <button
                onClick={() => handlePathSelection('service_receiver')}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#68b5c2] transition-all group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-all">
                    <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">I am a Service Receiver</h3>
                  <p className="text-gray-500 text-center text-sm">I'm looking for services</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpFlow;