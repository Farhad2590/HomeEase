import DynamicHeader from "../SharedComponets/DynamicHeader"
const HowItWorks = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl font-bold text-gray-900">How It Works</h2> */}
             <DynamicHeader title="How It Works" />
            <p className="mt-4 text-lg text-gray-600">Get your home services done in 3 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                ),
                title: "1. Find a Service",
                description: "Search and browse through our wide range of professional home services."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
                title: "2. Book an Appointment",
                description: "Select your preferred date and time slot for the service."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                ),
                title: "3. Get It Done",
                description: "Our verified professional will arrive at your doorstep to perform the service."
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-[#e6f4f7] rounded-full p-6 mb-4">
                  <svg className="h-10 w-10 text-[#68b5c2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {step.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;