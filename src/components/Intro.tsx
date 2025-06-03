import React from 'react';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Your Cat's Perfect Stay
        </h1>
        <p className="text-xl text-gray-600">
          Trust us to provide the best care for your feline friend while you're away
        </p>
      </section>

      <section className="space-y-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Why Choose Our Cat Sitting Service?
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-700">
                Professional & Experienced Sitters
              </p>
              <p className="text-sm text-gray-500">
                Our team of dedicated cat sitters have years of experience and genuine love for cats
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                Personalized Care Plans
              </p>
              <p className="text-sm text-gray-500">
                We tailor our service to meet your cat's unique needs and preferences
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                24/7 Emergency Support
              </p>
              <p className="text-sm text-gray-500">
                Always available to help with any concerns about your cat's well-being
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Services
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-700">
                Daily Visits & Feeding
              </p>
              <p className="text-sm text-gray-500">
                Regular check-ins to ensure your cat is happy and healthy
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                Play & Exercise Time
              </p>
              <p className="text-sm text-gray-500">
                Interactive play sessions to keep your cat active and entertained
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                Medication Administration
              </p>
              <p className="text-sm text-gray-500">
                Professional handling of any required medications
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow">
            Book Your Cat Sitter
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
