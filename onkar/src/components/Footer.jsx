import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const contacts = [
    { name: 'INDERJEET SINGH MATHARU', number: '+91 9819290650' },
    { name: 'ONKAR SINGH MATHARU', number: '+91 09167515187' }
  ];

  return (
    <div id="contact" className="bg-amber-500 text-white py-6">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          {contacts.map((contact, index) => (
            <div key={index} className="p-4 bg-amber-400 rounded-lg shadow flex items-center">
              <div>
                <h3 className="text-sm font-semibold">{contact.name}</h3>
                <button
                  onClick={() => copyToClipboard(contact.number)}
                  className="text-xs hover:underline focus:outline-none"
                >
                  {contact.number}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4 lg:mt-0">
          <a href="https://www.instagram.com/onkarenterprises.co.in?igsh=MXhkZmM4OHVrcjdyZA%3D%3D&utm_source=qr" className="text-xl mx-2 hover:text-orange-500" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/onkar-singh-7a3993114?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-xl mx-2 hover:text-orange-500" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
