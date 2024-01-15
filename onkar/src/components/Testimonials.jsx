import React from 'react';

// Dummy client data - replace with real client logos and names
// const clients = [
//   { logo: '/client-logo-1.png', name: 'Client 1' },
//   { logo: '/client-logo-2.png', name: 'Client 2' },
//   { logo: '/client-logo-3.png', name: 'Client 3' },
//   // ... more clients
// ];
import { clients } from '../constants';

const Testimonials = () => {
  return (
    <div className="font-bold font-poppins py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Trusted by Companies Worldwide
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <div className="p-4 rounded-lg shadow-lg flex items-center justify-center hover:shadow-2xl">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-24 mb-2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
