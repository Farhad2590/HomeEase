const CtaSection = () => {
    return (
      <section className="py-16 bg-[#68b5c2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust HomeEase for their home service needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#68b5c2] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
                Book a Service
              </button>
              <button className="bg-[#5aa4b1] hover:bg-[#4c93a0] text-white px-6 py-3 rounded-md font-medium transition-colors">
                Become a Provider
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CtaSection;