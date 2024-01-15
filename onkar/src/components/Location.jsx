import React from 'react';

// Define your locations with URLs and names
const locations = [
  {
    url: 'https://www.google.com/maps?q=20.172443389892578,72.77413940429688&z=17&hl=en',
    name: 'Our Factory' // The name for your factory location
  },
  {
    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.62428411950364!2d72.88856517573912!3d19.10815841390879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80d4fc5c533%3A0xfc00df8f72824df1!2sMATHARU%20%26%20SONS!5e0!3m2!1sen!2sin!4v1703340281742!5m2!1sen!2sin',
    name: 'Our Office' // The name for your office location
  },
  // ... add more locations if needed
];

const LocationsEmbed = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold font-poppins text-center text-gray-800 mb-12">
        Our Locations
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {locations.map((location, index) => (
            <div key={index} className="relative group">
              <iframe
                title={location.name}
                src={`${location.url}&output=embed`}
                className="w-full h-64 md:h-96 rounded-lg shadow-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <p className="mt-2 text-center text-lg font-semibold">{location.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsEmbed;
